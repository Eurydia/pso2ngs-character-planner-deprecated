import { Food, FoodAttribute, FoodCategory } from "../../types/food";

export const makeFood = (
  category: FoodCategory,
  attribute: FoodAttribute,
  name_override: string = "",
): Food => {
  let name: string = `${attribute} ${category}`;
  if (name_override) {
    name = name_override;
  }
  return {
    name,
    category,
    attribute,
  };
};
