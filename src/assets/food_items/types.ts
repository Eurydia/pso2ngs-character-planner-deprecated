export enum FoodCategory {
  MEAT = "MEAT",
  FRUIT = "FRUIT",
  VEGETABLE = "VEGETABLE",
  SEAFOOD = "SEAFOOD",
}

export enum FoodAttribute {
  CRISPY = "CRISPY",
  LIGHT = "LIGHT",
  ROBUST = "ROBUST",
  RICH = "RICH",
}

export type FoodItemData = Readonly<{
  name: string;
  category: FoodCategory;
  attribute: FoodAttribute;
}>;
