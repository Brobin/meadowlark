import { Client, GatewayIntentBits } from "discord.js";

export async function login() {
  const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
  });
  await client.login(process.env.DISCORD_TOKEN);
  return client;
}
