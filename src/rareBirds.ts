import { getRareBirds } from "utils/ebird";
import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import { buildDiscordMessage } from "utils/discord";

async function updateRareBirds() {
  dotenv.config();
  const observations = await getRareBirds();

  if (observations.length) {
    const client = new Client({
      intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
    });
    await client.login(process.env.DISCORD_TOKEN);

    const channel = await client.channels.fetch(
      process.env.DISCORD_CHANNEL_ID as string
    );

    if (channel?.isSendable()) {
      await Promise.all(
        observations.map((obs) =>
          channel.send({ embeds: [buildDiscordMessage(obs)] })
        )
      );
    }
  }
  await process.exit();
}

updateRareBirds();
