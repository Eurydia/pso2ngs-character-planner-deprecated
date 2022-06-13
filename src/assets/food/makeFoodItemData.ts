import { FoodData, FoodAttribute, FoodCategory } from "./types";

/**
 * The name of the item, if not overridden,
 * comes from combining its attribute
 * and category.
 * @param category
 * @param attribute
 * @param name_override
 * @returns
 */
export const makeFoodItemData = (
  category: FoodCategory,
  attribute: FoodAttribute,
  name_override: string = "",
): FoodData => {
  let name = name_override
    ? name_override
    : `${attribute} ${category}`;
  name = name.toLowerCase();

  return Object.freeze({
    name,
    category,
    attribute,
  });
};
