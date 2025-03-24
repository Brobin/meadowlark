import { getRareBirds } from "utils/ebird";
import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import { buildDiscordEmbed, buildDiscordMessage } from "utils/message";
import { getObsIds, insertObsIds } from "utils/database";

async function updateRareBirds(region: string, channelId: string) {
  dotenv.config();
  const observations = await getRareBirds(region);
  const obsIds = await getObsIds(region);

  const newObservatsion = observations.filter(
    ({ obsId }) => !obsIds.has(obsId)
  );

  if (newObservatsion.length) {
    const client = new Client({
      intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
    });
    await client.login(process.env.DISCORD_TOKEN);

    const channel = await client.channels.fetch(channelId);

    if (channel?.isSendable()) {
      await Promise.all([
        ...newObservatsion.map((obs) =>
          channel.send({
            content: buildDiscordMessage(obs),
            embeds: [buildDiscordEmbed(obs)],
          })
        ),
        insertObsIds(
          newObservatsion.map((obs) => obs.obsId),
          region
        ),
      ]);
    }
  }
  await process.exit();
}
function rareBirds() {
  const args = process.argv.slice(2);

  const regionArg = args.find((arg) => arg.startsWith("--region="));
  const region = regionArg ? regionArg.split("=")[1] : undefined;

  const channleArg = args.find((arg) => arg.startsWith("--channel="));
  const channelId = channleArg ? channleArg.split("=")[1] : undefined;

  if (region && channelId) {
    updateRareBirds(region, channelId);
  }
}

rareBirds();
