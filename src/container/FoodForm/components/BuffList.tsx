import { FC, Fragment, memo, ReactNode } from "react";
import {
  Grid,
  Typography,
  Box,
  TypographyProps,
} from "@mui/material";
import {
  FoodItem,
  FoodAttribute,
  getCategoryStatAmount,
  getAttributeStatAmount,
} from "../../../assets/food";
import { parseNumberToDisplay } from "../../../utility";
import { FoodCategory } from "../../../assets/food";
import { grey } from "@mui/material/colors";

interface FoodBuff {
  name: string;
  item_used_amount: number;
  origin: string;
  parsed_amount: string;
}
const getFoodBuffsFromItems = (
  food_items: FoodItem[],
): FoodBuff[] => {
  const BUFF_NAME: {
    [key: string]: string;
  } = {
    MEAT: "potency",
    FRUIT: "PP",
    VEGETABLE: "DMG resist",
    SEAFOOD: "HP",
    CRISPY: "DMG against weak point",
    LIGHT: "PP recovery",
    ROBUST: "HP recovery",
    RICH: "PP cost",
  };
  let template: { [key in FoodCategory | FoodAttribute]: number } = {
    // category
    MEAT: 0,
    FRUIT: 0,
    VEGETABLE: 0,
    SEAFOOD: 0,
    // attribute
    CRISPY: -3,
    LIGHT: -3,
    ROBUST: -3,
    RICH: -3,
  };

  for (const food_item of food_items) {
    const { attribute, category, amount } = food_item;
    template[attribute] += amount;
    template[category] += amount;
  }

  const categories = new Set(Object.keys(FoodCategory));

  let res: FoodBuff[] = [];
  for (const key of Object.keys(template)) {
    const _key = key as FoodCategory | FoodAttribute;
    if (template[_key] < 1) {
      continue;
    }
    let level = template[_key];
    let item_used_amount = level;
    let parsed_amount: string = "";
    if (categories.has(_key)) {
      parsed_amount = parseNumberToDisplay(
        getCategoryStatAmount(_key as FoodCategory, level),
        _key === FoodCategory.FRUIT,
      );
    } else {
      item_used_amount += 3;
      parsed_amount = parseNumberToDisplay(
        getAttributeStatAmount(_key as FoodAttribute, level),
        false,
      );
    }
    res.push({
      name: BUFF_NAME[key],
      origin: key,
      item_used_amount,
      parsed_amount,
    });
  }

  return res;
};

interface BuffListRowProps {
  bold?: boolean;
  backgroundColor?: string;
  itemUsedAmountSlot: ReactNode;
  originSlot: ReactNode;
  nameSlot: ReactNode;
  parsedAmountSlot: ReactNode;
}
const BuffListRow: FC<BuffListRowProps> = (props) => {
  const typo_sx: TypographyProps = {
    fontWeight: props.bold ? "500" : undefined,
  };
  return (
    <Grid
      container
      padding={2}
      alignItems="flex-end"
      sx={{
        backgroundColor: props.backgroundColor,
        textTransform: "capitalize",
      }}
    >
      <Grid item xs={3}>
        <Typography {...typo_sx}>
          {props.itemUsedAmountSlot}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography {...typo_sx}>{props.originSlot}</Typography>
      </Grid>
      <Grid item xs>
        <Typography {...typo_sx}>{props.nameSlot}</Typography>
      </Grid>
      <Grid item xs={2} display="flex" justifyContent="flex-end">
        <Typography {...typo_sx}>{props.parsedAmountSlot}</Typography>
      </Grid>
    </Grid>
  );
};

interface BuffListProps {
  items: FoodItem[];
}
const BuffList: FC<BuffListProps> = memo(
  (props) => {
    const active_buffs = getFoodBuffsFromItems(props.items);
    return (
      <Box>
        {active_buffs.length === 0 ? (
          <Typography>No active buff.</Typography>
        ) : (
          <Fragment>
            <BuffListRow
              bold
              backgroundColor={grey[300]}
              itemUsedAmountSlot="# of items"
              originSlot="origin"
              nameSlot="effect"
              parsedAmountSlot="amount"
            />
            {active_buffs.map(
              (
                { name, origin, item_used_amount, parsed_amount },
                index,
              ) => (
                <BuffListRow
                  key={name}
                  backgroundColor={
                    index % 2 === 1 ? grey[100] : undefined
                  }
                  itemUsedAmountSlot={item_used_amount}
                  originSlot={origin.toLowerCase()}
                  nameSlot={name}
                  parsedAmountSlot={parsed_amount}
                />
              ),
            )}
          </Fragment>
        )}
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

    return true;
  },
);
export default BuffList;
