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
export const makeFoodData = (
  category: FoodCategory,
  attribute: FoodAttribute,
  name_override: string = "",
): FoodData => {
  let name = `${attribute} ${category}`;

  if (Boolean(name_override)) {
    name = name_override;
  }

  return Object.freeze({
    name,
    category,
    attribute,
  });
};
