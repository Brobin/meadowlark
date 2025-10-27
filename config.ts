import {
  excludeEasternCounties,
  nebraskaExclude,
  sarpyExclude,
  triCityExclude,
} from "./exclude";

type RbaConfig = {
  channel: string;
  regions: string[];
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
    exclude: excludeEasternCounties,
  },
  {
    // Omaha
    channel: "1353711880048349204",
    regions: [
      "US-NE-055", // Douglas
      "US-NE-153", // Sarpy
      "US-NE-177", // Washington
    ],
    exclude: sarpyExclude,
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
];
