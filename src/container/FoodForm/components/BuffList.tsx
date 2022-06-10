import { FC, memo } from "react";
import { Divider, Grid, Stack, Typography, Box } from "@mui/material";
import {
  FoodItem,
  FoodAttribute,
  getCategoryStatAmount,
  getAttributeStatAmount,
} from "../../../assets/food-items";
import { parseNumberToDisplay } from "../../../utility";
import { FoodCategory } from "../../../assets/food-items";

interface BuffItemProps {
  name: string;
  origin: string;
  level: number | string;
  amount: string;
}
const BuffItem: FC<BuffItemProps> = memo(
  (props) => {
    return (
      <Box>
        <Grid
          container
          columns={10}
          columnSpacing={1}
          sx={{
            padding: 2,
            alignItems: "center",
            textTransform: "capitalize",
          }}
        >
          <Grid item xs={6}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography fontWeight="medium">
                {props.name}
              </Typography>
              <Typography>[{props.origin}]</Typography>
              <Typography>({props.level})</Typography>
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <Typography>{props.amount}</Typography>
          </Grid>
        </Grid>
      </Box>
    );
  },
  (prev, next) => {
    if (prev.name !== next.name) {
      return false;
    }
    if (prev.level !== next.level) {
      return false;
    }
    if (prev.origin !== next.origin) {
      return false;
    }
    if (prev.amount !== next.amount) {
      return false;
    }
    return true;
  },
);

const BUFF_NAME: {
  [key: string]: string;
} = {
  MEAT: "potency",
  FRUIT: "PP",
  VEGETABLE: "DMG resist",
  SEAFOOD: "HP",
  CRISPY: "weak point DMG",
  LIGHT: "PP recovery",
  ROBUST: "HP recovery",
  RICH: "PP cost",
};

interface FoodBuff {
  name: string;
  level: number;
  origin: string;
  parsed_amount: string;
}
const getFoodBuffs = (food_items: FoodItem[]): FoodBuff[] => {
  let active_buffs: { [key: string]: number } = {};

  for (const food_item of food_items) {
    const { attribute, category, amount } = food_item;

    if (active_buffs[attribute] === undefined) {
      active_buffs[attribute] = amount - 3;
    } else {
      active_buffs[attribute]! += amount;
    }

    if (active_buffs[category] === undefined) {
      active_buffs[category] = amount;
    } else {
      active_buffs[category]! += amount;
    }
  }

  let res: FoodBuff[] = [];
  for (const key of Object.keys(active_buffs)) {
    const level = active_buffs[key];
    if (level < 1) {
      continue;
    }
    let amount = 0;
    if (Object.keys(FoodCategory).includes(key)) {
      const _key = key as FoodCategory;
      amount = getCategoryStatAmount(_key, level);
    } else {
      const _key = key as FoodAttribute;
      amount = getAttributeStatAmount(_key, level);
    }
    res.push({
      name: BUFF_NAME[key],
      level,
      origin: key,
      parsed_amount: parseNumberToDisplay(
        amount,
        key === FoodCategory.FRUIT,
      ),
    });
  }

  return res;
};

interface BuffListProps {
  items: FoodItem[];
}
const BuffList: FC<BuffListProps> = memo(
  (props) => {
    return (
      <Box>
        <Stack divider={<Divider flexItem />}>
          {props.items.length > 0 ? (
            getFoodBuffs(props.items).map((item) => (
              <BuffItem
                key={item.name}
                name={item.name}
                level={item.level}
                origin={item.origin.toLowerCase()}
                amount={item.parsed_amount}
              />
            ))
          ) : (
            <Typography fontSize="large">
              ...nothing to see here🐬...
            </Typography>
          )}
        </Stack>
      </Box>
    );
  },
  (prev, next) => {
    if (prev.items.length !== next.items.length) {
      return false;
    }
    for (let i = 0; i < prev.items.length; i++) {
      const prev_item = prev.items[i];
      const next_item = next.items[i];

      if (prev_item.name !== next_item.name) {
        return false;
      }

      if (prev_item.amount !== next_item.amount) {
        return false;
      }
    }

    return false;
  },
);
export default BuffList;
