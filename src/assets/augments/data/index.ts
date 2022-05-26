import { Augment } from "../../../types";
import { default as addi } from "./addi";
import { default as basic } from "./basic";
import { default as domina } from "./domina";
import { default as dread } from "./dread";
import { default as dualble } from "./dualble";
import { default as elemental } from "./elemental";
import { default as fused } from "./fused";
import { default as fusia } from "./fusia";
import { default as gigas } from "./gigas";
import { default as note } from "./note";
import { default as secreta } from "./secreta";
import { default as soul } from "./soul";
import { default as tria } from "./tria";
import { default as ward } from "./ward";

const AUGMENTS: Augment[] = [
    ...basic,
    ...dualble,
    ...ward,
    ...soul,
    ...note,
    ...domina,
    ...secreta,
    ...dread,
    ...gigas,
    ...tria,
    ...elemental,
    ...fusia,
    ...fused,
    ...addi,
];
export default AUGMENTS;
