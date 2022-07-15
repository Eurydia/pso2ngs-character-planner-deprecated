export enum FoodCategory {
  MEAT = "meat",
  FRUIT = "fruit",
  VEGETABLE = "vegetable",
  SEAFOOD = "seafood",
}

export enum FoodAttribute {
  CRISPY = "crispy",
  LIGHT = "light",
  ROBUST = "robust",
  RICH = "rich",
}

export type FoodData = Readonly<{
  name: string;
  category: FoodCategory;
  attribute: FoodAttribute;
}>;

export type FoodDataSignature = Pick<FoodData, "name">;

export type FoodItem = FoodData & {
  amount: number;
};

export type FoodItemSignature = Pick<FoodItem, "name" | "amount">;
