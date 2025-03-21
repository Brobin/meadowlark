import { getRareBirds } from "utils/ebird";
import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import { buildDiscordMessage } from "utils/message";
import { getObsIds, insertObsIds } from "utils/database";

async function updateRareBirds() {
  dotenv.config();
  const observations = await getRareBirds();
  const obsIds = await getObsIds();

  const newObservatsion = observations.filter(
    (obs) => !obsIds.includes(obs.obsId)
  );

  if (newObservatsion.length) {
    const client = new Client({
      intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
    });
    await client.login(process.env.DISCORD_TOKEN);

    const channel = await client.channels.fetch(
      process.env.DISCORD_CHANNEL_ID as string
    );

    if (channel?.isSendable()) {
      await Promise.all([
        ...newObservatsion.map((obs) =>
          channel.send({ embeds: [buildDiscordMessage(obs)] })
        ),
        insertObsIds(newObservatsion.map((obs) => obs.obsId)),
      ]);
    }
  }
  await process.exit();
}

updateRareBirds();
