import { StatPayload } from "../stats";

export enum FixaTypes {
  WEAPON = "weapon",
  UNIT = "unit",
}

export type FixaDataSignature = Readonly<{
  /**
   * Fixa name.
   */
  name: string;

  /**
   * Fixa level.
   */
  level: number;
}>;

export type FixaData = FixaDataSignature &
  Readonly<{
    /**
     * Fixa type.
     *
     * As of Kvaris update, there two types of fixa:
     * - weapon fixas, and
     * - unit fixas.
     */
    fixa_type: string | FixaTypes;

    /**
     * The stats and conditional stats
     * that the fixa gives.
     */
    payload: StatPayload;
  }>;
