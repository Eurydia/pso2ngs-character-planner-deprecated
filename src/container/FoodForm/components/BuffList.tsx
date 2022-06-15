import { FC, memo } from "react";
import {
  Divider,
  Grid,
  Stack,
  Typography,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import {
  FoodItem,
  FoodAttribute,
  getCategoryStatAmount,
  getAttributeStatAmount,
} from "../../../assets/food";
import { parseNumberToDisplay } from "../../../utility";
import { FoodCategory } from "../../../assets/food";

interface FoodBuff {
  name: string;
  item_used: number;
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
    let item_used = level;
    let parsed_amount: string = "";
    if (categories.has(_key)) {
      parsed_amount = parseNumberToDisplay(
        getCategoryStatAmount(_key as FoodCategory, level),
        _key === FoodCategory.FRUIT,
      );
    } else {
      item_used += 3;
      parsed_amount = parseNumberToDisplay(
        getAttributeStatAmount(_key as FoodAttribute, level),
        false,
      );
    }
    res.push({
      name: BUFF_NAME[key],
      origin: key,
      item_used: level,
      parsed_amount,
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
        {props.items.length > 0 ? (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell># of Items</TableCell>
                  <TableCell>Origin</TableCell>
                  <TableCell>Buff</TableCell>
                  <TableCell align="right">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {getFoodBuffsFromItems(props.items).map(
                  ({ name, origin, item_used, parsed_amount }) => (
                    <TableRow
                      key={name}
                      sx={{ textTransform: "capitalize" }}
                    >
                      <TableCell>{item_used}</TableCell>
                      <TableCell>{origin}</TableCell>
                      <TableCell>{name}</TableCell>
                      <TableCell align="right">
                        {parsed_amount}
                      </TableCell>
                    </TableRow>
                  ),
                )}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography>No active food buff...</Typography>
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
