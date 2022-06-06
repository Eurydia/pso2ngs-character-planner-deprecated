import { ChangeEvent, FC, Fragment, useState } from "react";
import { Box, Paper, Stack, TextField } from "@mui/material";
import {
  AutoAwesome,
  Fastfood,
  FilterSharp,
} from "@mui/icons-material";
import {
  Conditional,
  Stat,
  FoodWithAmount,
  FoodCategory,
  FoodAttribute,
  FoodBuff,
} from "../../types";
import FOOD_ITEMS, {
  getStatFromCategory,
  getStatFromAttribute,
} from "../../assets/food_items";
import { FOOD_ITEM_MAX } from "../../stores";
import CustomCard from "../../components/CustomCard";
import FoodList from "./components/FoodList";
import BuffList from "./components/BuffList";
import { matchSorter } from "match-sorter";

const getInitial = () => {
  let init_values: FoodWithAmount[] = [];
  const amount = 0;
  for (const food of FOOD_ITEMS) {
    init_values.push({ food, amount });
  }
  return init_values;
};

const CATEGORY_BUFF_NAME: {
  [keys in FoodCategory]: string;
} = {
  MEAT: "potency",
  FRUIT: "PP",
  VEGETABLE: "DMG resist",
  SEAFOOD: "HP",
};

const ATTRIBUTE_BUFF_NAME: {
  [keys in FoodAttribute]: string;
} = {
  CRISPY: "weak point DMG",
  LIGHT: "PP recovery",
  ROBUST: "HP recovery",
  RICH: "PP cost",
};

const getItemLeftover = (food_items: FoodWithAmount[]): number => {
  let leftover = FOOD_ITEM_MAX;
  food_items.forEach((item) => {
    leftover -= item.amount;
  });
  return leftover;
};

const sortByAlphabet = (a: string, b: string): number => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};

const filterItems = (
  filter_string: string,
  items: FoodWithAmount[],
): FoodWithAmount[] => {
  if (!filter_string) {
    return items;
  }

  const terms = filter_string
    .split(" ")
    .map((term) => term.trim())
    .filter((term) => Boolean(term));
  if (terms.length === 0) {
    return items;
  }

  const result = terms
    .reduceRight(
      (res, term) =>
        matchSorter(res, term, {
          keys: ["food.name", "food.attribute", "food.category"],
        }),
      items,
    )
    .sort((a, b) => sortByAlphabet(a.food.name, b.food.name));
  return result;
};

const getActiveBuffs = (items: FoodWithAmount[]): FoodBuff[] => {
  let buffs: FoodBuff[] = [];

  // for (const item of items) {
  //   const { category, attribute } = item.food;

  //   const amount = item.amount;
  // }

  return buffs;

  // let result: FoodBuff[] = [];
  // for (const key of Object.keys(categories)) {
  //   const k = key as FoodCategory;
  //   const value = categories[k];
  //   if (value === 0) {
  //     continue;
  //   }

  //   result.push({
  //     buff_name: CATEGORY_BUFF_NAME[k],
  //     buff_level: value,
  //     buff_origin: k,
  //     stats: getStatFromCategory(k, value),
  //     conditionals: [],
  //   });
  // }

  // for (const key of Object.keys(attributes)) {
  //   const k = key as FoodAttribute;
  //   const value = attributes[k];
  //   if (value < 4) {
  //     continue;
  //   }

  //   if (k === FoodAttribute.CRISPY) {
  //     const conditionals = getStatFromAttribute(
  //       k,
  //       value,
  //     ) as Conditional[];

  //     result.push({
  //       buff_name: ATTRIBUTE_BUFF_NAME[k],
  //       buff_level: value,
  //       buff_origin: k,
  //       stats: [],
  //       conditionals,
  //     });
  //   } else {
  //     const stats = getStatFromAttribute(k, value) as Stat[];
  //     result.push({
  //       buff_name: ATTRIBUTE_BUFF_NAME[k],
  //       buff_level: value,
  //       buff_origin: k,
  //       stats: stats,
  //       conditionals: [],
  //     });
  //   }
  // }
};

interface FoodFormProps {}
const FoodForm: FC<FoodFormProps> = (props) => {
  const [items, setItems] = useState<FoodWithAmount[]>(getInitial);

  const [filterString, setFilterString] = useState("");

  const handleAmountChange = (value: number, item_name: string) => {
    setItems((prev) => {
      let target_index = -1;
      let usable = FOOD_ITEM_MAX;
      prev.forEach((item, index) => {
        if (item.food.name === item_name) {
          target_index = index;
          return;
        }
        usable -= item.amount;
      });

      const amount = value > usable ? usable : value;

      let next = [...prev];
      next[target_index] = { ...next[target_index], amount };
      return next;
    });
  };

  const handleFilterStringChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = event.target.value.normalize();
    setFilterString(value);
  };

  const leftover = getItemLeftover(items);

  return (
    <CustomCard
      frontTitleIcon={<Fastfood />}
      frontTitle="Food Buff"
      frontContent={
        <Box sx={{ height: 300 }}>
          <Stack spacing={2}>
            <Paper elevation={4}>
              <TextField
                value={filterString}
                onChange={handleFilterStringChange}
                fullWidth
                variant="outlined"
                label="Filter Items"
                size="small"
              />
            </Paper>
            <Box sx={{ height: 250, overflowY: "auto" }}>
              <FoodList
                disableZero={leftover === 0}
                items={filterItems(filterString, items)}
                onChange={handleAmountChange}
              />
            </Box>
          </Stack>
        </Box>
      }
      backTitleIcon={<AutoAwesome />}
      backTitle="Active Effects"
      backContent={
        <Box sx={{ height: 300, overflowY: "auto" }}>
          <BuffList items={getActiveBuffs(items)} />
        </Box>
      }
    />
  );
};

export default FoodForm;
