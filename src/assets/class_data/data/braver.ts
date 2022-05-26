import { ClassNames } from "../../../types";
import { makeClass, makeClassSkill } from "../makeClass";

const CLASS_DATA = makeClass(ClassNames.BRAVER, 270, 452, 302, [
  makeClassSkill("resta effect amplifier", 5),
]);

export default CLASS_DATA;
