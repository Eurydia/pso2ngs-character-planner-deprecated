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

export type FoodData = Readonly<{
  name: string;
  category: FoodCategory;
  attribute: FoodAttribute;
}>;

export type FoodItem = FoodData & {
  amount: number;
};

export type FoodItemSignature = Pick<FoodItem, "name" | "amount">;
