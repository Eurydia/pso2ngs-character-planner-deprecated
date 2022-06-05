import { Food, FoodAttribute, FoodCategory } from "./types";

export const makeFood = (
  category: FoodCategory,
  attribute: FoodAttribute,
  name_override: string = "",
): Food => {
  const name = name_override
    ? name_override
    : `${attribute} ${category}`;
  return Object.freeze({
    name: name.toLowerCase(),
    category,
    attribute,
  });
};
