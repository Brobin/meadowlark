import dotenv from "dotenv";
import { ActivityType } from "discord.js";
import { login } from "utils/discord";

async function ping() {
  dotenv.config();

  const client = await login();
  client.user?.setPresence({
    activities: [
      {
        name: "BIRDS",
        type: ActivityType.Watching,
      },
    ],
  });
  await process.exit();
}

ping();
