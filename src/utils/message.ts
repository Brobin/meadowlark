import dayjs from "dayjs";
import { EmbedBuilder } from "discord.js";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { Observation } from "../types";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Chicago");

export function buildDiscordMessage(observation: Observation) {
  return `${observation.comName} in ${observation.subnational2Name} County`;
}

export function buildDiscordEmbed(observation: Observation) {
  const location = observation.locationPrivate
    ? `${observation.locName} (Personal Location)`
    : observation.locName;

  return new EmbedBuilder()
    .setColor(0x0099ff)
    .setTitle(observation.comName)
    .setURL(`https://ebird.org/checklist/${observation.subId}`)
    .setTimestamp(dayjs(observation.obsDt).tz("America/Chicago", true).toDate())
    .addFields({
      value: location,
      name: `${observation.subnational2Name} County`,
    })
    .setFooter({ text: observation.userDisplayName });
}
