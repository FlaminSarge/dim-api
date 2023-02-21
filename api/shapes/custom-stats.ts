// we go generous here on key options, because sometimes a statHash
// is a string, because it was a dictionary key

import { DestinyClass } from 'bungie-api-ts/destiny2';

/** traditional custom stats use a binary 1 or 0 for all 6 armor stats, but this could support more complex weights */
export interface CustomStatWeights {
  [statHash: number]: number | undefined;
  [statHash: string]: number | undefined;
}

export interface CustomStatDef {
  /** a unique identifier to look up this stat, uuidv4 for new stats, or a special string for up-converted old cust stats */
  id: string;
  /** a unique-per-class name for this stat */
  label: string;
  /** an abbreviated/crunched form of the stat label, for use in search filters */
  shortLabel: string;
  /** which guardian class this stat should be used for */
  class: DestinyClass;
  /** info about how to calculate the stat total */
  weights: CustomStatWeights;
}
