import { ClassNames } from "../../../types";
import { makeClass, makeClassSkill } from "../makeClass";

const CLASS_DATA = makeClass(ClassNames.TECHTER, 235, 453, 296, [
  makeClassSkill("awake aile", 10),
  makeClassSkill("resta field techter", 1),
]);

export default CLASS_DATA;
