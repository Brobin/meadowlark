import { getRareBirds } from "utils/ebird";
import dotenv from "dotenv";
import { buildDiscordEmbed, buildDiscordMessage } from "utils/message";
import { getObsIds, insertObsIds } from "utils/database";
import { login } from "utils/discord";

async function updateRareBirds(
  region: string,
  channelId: string,
  skip: boolean
) {
  dotenv.config();
  const observations = await getRareBirds(region);
  const obsIds = await getObsIds(region);

  const newObservations = observations.filter(
    ({ obsId }) => !obsIds.has(obsId)
  );

  if (newObservations.length) {
    const client = await login();

    const channel = await client.channels.fetch(channelId);

    if (channel?.isSendable() && !skip) {
      await Promise.all([
        ...newObservations.map((obs) =>
          channel.send({
            content: buildDiscordMessage(obs),
            embeds: [buildDiscordEmbed(obs)],
          })
        ),
      ]);
    }

    await insertObsIds(
      newObservations.map((obs) => obs.obsId),
      region
    );
  }

  await process.exit();
}
function rareBirds() {
  const args = process.argv.slice(2);

  const regionArg = args.find((arg) => arg.startsWith("--region="));
  const region = regionArg ? regionArg.split("=")[1] : undefined;

  const channleArg = args.find((arg) => arg.startsWith("--channel="));
  const channelId = channleArg ? channleArg.split("=")[1] : undefined;

  const skip = args.find((arg) => arg.startsWith("--skip")) ? true : false;

  if (region && channelId) {
    updateRareBirds(region, channelId, skip);
  }
}

rareBirds();
