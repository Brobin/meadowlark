import {
  lancasterExclude,
  nebraskaExclude,
  sarpyExclude,
  triCityExclude,
  excludeEasternCounties,
  panhandleExclude,
  keithExclude,
} from "./exclude";

type RbaConfig = {
  /** Discord Channel ID */
  channel: string;
  /** List of ebird regions to include */
  regions: string[];
  /** Species to exclude from the RBA. Useful for seasonal rarities */
  exclude?: Set<string>;
};

export const config: RbaConfig[] = [
  {
    // Statewide
    channel: "1246125443736928407",
    regions: ["US-NE"],
    exclude: nebraskaExclude,
  },
  {
    // Lincoln
    channel: "1353706678498889758",
    regions: ["US-NE-109"],
    exclude: lancasterExclude,
  },
  {
    // Omaha
    channel: "1353711880048349204",
    regions: [
      "US-NE-153", // Sarpy
    ],
    exclude: sarpyExclude,
  },
  {
    channel: "1353711880048349204",
    regions: [
      "US-NE-055", // Douglas
      "US-NE-177", // Washington
    ],
    exclude: excludeEasternCounties,
  },
  {
    // Tri-city
    channel: "1425297312770429018",
    regions: [
      "US-NE-019", // Buffalo
      "US-NE-079", // Hall
      "US-NE-001", // Adams
      "US-NE-099", // Kearney
      "US-NE-121", // Merrick
      "US-NE-081", // Hamilton
      "US-NE-137", // Phelps
      "US-NE-035", // Clay
    ],
    exclude: triCityExclude,
  },
  {
    // Panhandle
    channel: "1518278352593485895",
    regions: [
      "US-NE-165", // Sioux
      "US-NE-157", // Scotts Bluff
      "US-NE-007", // Banner
      "US-NE-105", // Kimball
      "US-NE-045", // Dawes
      "US-NE-103", // Box Butte
      "US-NE-123", // Morrill
      "US-NE-033", // Cheyenne
      "US-NE-161", // Sheridan
      "US-NE-069", // Garden
      "US-NE-049", // Deuel
    ],
    exclude: panhandleExclude
  },
  {
    // Keith
    channel: "1518278352593485895",
    regions: [
      "US-NE-101", // Keith
    ],
    exclude: keithExclude
  }
];
