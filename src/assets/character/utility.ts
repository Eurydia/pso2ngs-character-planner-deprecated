import CHARACTER_CLASSES from ".";
import {
  CHARACTER_MAX,
  CHARACTER_MIN,
  SKILL_POINTS_MAX,
  SKILL_POINTS_MIN,
} from "../../stores";
import {
  Character,
  ClassData,
  ClassDataSignature,
  CharacterSignature,
} from "./types";
import { typeguardClassDataSignature } from "./typeguard";

export const getCharacterTemplate = (): Character => {
  return {
    level: CHARACTER_MIN,
    main_class: CHARACTER_CLASSES[0],
    main_sp: SKILL_POINTS_MIN,
    sub_class: CHARACTER_CLASSES[1],
    sub_sp: SKILL_POINTS_MIN,
  };
};

export const classDataToSignature = (
  class_data: ClassData,
): ClassDataSignature => {
  return { name: class_data.name };
};

export const classDataFromSignature = (
  signature: ClassDataSignature,
): ClassData | null => {
  if (!typeguardClassDataSignature(signature)) {
    return null;
  }
  for (const data of CHARACTER_CLASSES) {
    if (data.name === signature.name) {
      return data;
    }
  }
  return null;
};

export const saveCharacterToLocal = ({
  level,
  main_class,
  main_sp,
  sub_class,
  sub_sp,
}: Character) => {
  const main_class_sig = classDataToSignature(main_class);
  const sub_class_sig = classDataToSignature(sub_class);

  const res: CharacterSignature = {
    level,
    main_class: main_class_sig,
    main_sp,
    sub_class: sub_class_sig,
    sub_sp,
  };
  localStorage.setItem("character", JSON.stringify(res));
};
export const loadCharacterFromLocal = (): Character => {
  const as_string = localStorage.getItem("character");

  if (!as_string) {
    return getCharacterTemplate();
  }

  const stored: CharacterSignature = JSON.parse(as_string);
  let res: Character = getCharacterTemplate();

  const main_class = classDataFromSignature(stored.main_class);
  if (main_class !== null) {
    res.main_class = main_class;
  }

  const sub_class = classDataFromSignature(stored.sub_class);
  if (sub_class !== null) {
    res.sub_class = sub_class;
  }

  if (
    typeof stored.level === "number" &&
    stored.level >= CHARACTER_MIN &&
    stored.level <= CHARACTER_MAX
  ) {
    res.level = stored.level;
  }
  if (
    typeof stored.main_sp === "number" &&
    stored.main_sp >= SKILL_POINTS_MIN &&
    stored.main_sp <= SKILL_POINTS_MAX
  ) {
    res.main_sp = stored.main_sp;
  }
  if (
    typeof stored.sub_sp === "number" &&
    stored.sub_sp >= SKILL_POINTS_MIN &&
    stored.sub_sp <= SKILL_POINTS_MAX
  ) {
    res.sub_sp = stored.sub_sp;
  }

  return res;
};
