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

export type Food = {
  name: string;
  category: FoodCategory;
  attribute: FoodAttribute;
};

export type FoodWithAmount = {
  food: Food;
  amount: number;
};

export type FoodBuff = {
  origin: FoodAttribute | FoodCategory;
  level: number;
};
