import { StatPayload } from "../stats";

export enum AugmentGroups {
  BASIC = "basic",
  FUSED = "fused",
  DUALBLE = "dualble",
  WARD = "ward",
  SOUL = "soul",
  NOTE = "note",
  DOMINA = "domina",
  SECRETA = "secreta",
  DREAD = "dread",
  GIGAS = "gigas",
  EXPLOIT = "exploit",
  FUSIA = "fusia",
  ADDI = "addi",
  TRIA = "tria",
  DECOLD = "decold",
  // unused
  S = "s",
}

export type AugmentDataSignature = Readonly<{
  /**
   * The name of the augment.
   */
  name: string;

  /**
   * The level of the augment.
   * If it doesn't have a level,
   * then this property should be `0`.
   */
  level: number;

  /**
   * This property tells the renderer
   * whether to display the name normally,
   * or concat and "S" at the end.
   */
  isSType: boolean;
}>;

export type AugmentData = AugmentDataSignature &
  Readonly<{
    /**
     * The group that the augment belongs to.
     * Use incombination with conflict property
     * to validate augment selection.
     */
    group: string | AugmentGroups;

    /**
     * The group of augments that conflicts with this augment.
     * Use in combination with group property
     * to validate augment selection.
     */
    conflict: (string | AugmentGroups)[];

    /**
     * The stats and conditional stats
     * that the augment gives.
     */
    payload: StatPayload;
  }>;
