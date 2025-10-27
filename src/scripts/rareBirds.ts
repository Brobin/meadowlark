import { getRareBirds } from "utils/ebird";
import dotenv from "dotenv";
import { buildDiscordEmbed, buildDiscordMessage } from "utils/message";
import { getObsIds, insertObsIds } from "utils/database";
import { login } from "utils/discord";
import { config } from "../../config";

async function updateRareBirds(
  region: string,
  channelId: string,
  skip: boolean,
  exclude: Set<string> = new Set()
) {
  const observations = await getRareBirds(region, exclude);
  const obsIds = await getObsIds(region);

  const newObservations = observations.filter(
    ({ obsId }) => !obsIds.has(obsId)
  );

  console.log(newObservations.length, region);

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
}

async function rareBirds() {
  dotenv.config();

  console.log("\nstarting rba bot run");

  const args = process.argv.slice(2);
  const skip = args.find((arg) => arg.startsWith("--skip")) ? true : false;

  await Promise.all(
    config.flatMap(({ channel, regions, exclude }) =>
      regions.map((region) => updateRareBirds(region, channel, skip, exclude))
    )
  );

  await process.exit();
}

rareBirds();
