import { Food, FoodAttribute, FoodCategory } from "./types";

/**
 * The name of the item, if not overridden,
 * comes from combining its attribute
 * and category.
 * @param category
 * @param attribute
 * @param name_override
 * @returns
 */
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
