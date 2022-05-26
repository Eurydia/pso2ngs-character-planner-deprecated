import { ClassNames } from "../../../types";
import { makeClass, makeClassSkill } from "../makeClass";

const CLASS_DATA = makeClass(ClassNames.FORCE, 235, 453, 296, [
  makeClassSkill("pp recovery boost", 10),
]);

export default CLASS_DATA;
