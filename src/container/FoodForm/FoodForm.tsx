import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { Box, Paper, Stack, TextField } from "@mui/material";
import {
  AutoAwesome,
  Fastfood,
  FilterAlt,
} from "@mui/icons-material";
import { matchSorter } from "match-sorter";
import { FoodItem } from "../../assets/food";
import { FOOD_ITEM_MAX } from "../../stores";
import CustomCard from "../../components/CustomCard";
import FoodList from "./components/FoodList";
import BuffList from "./components/BuffList";

const getItemLeftover = (food_items: FoodItem[]): number => {
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
  food_items: FoodItem[],
): FoodItem[] => {
  if (!filter_string) {
    return food_items.filter((item) => item.amount > 0);
  }

  const terms = filter_string
    .split(" ")
    .map((term) => term.trim())
    .filter((term) => Boolean(term));
  if (terms.length === 0) {
    return food_items.filter((item) => item.amount > 0);
  }

  const result = terms
    .reduceRight(
      (res, term) =>
        matchSorter(res, term, {
          keys: [
            (item) => item.name,
            (item) => item.attribute,
            (item) => item.category,
          ],
        }),
      food_items,
    )
    .sort((a, b) => sortByAlphabet(a.category, b.name));
  return result;
};

interface FoodFormProps {
  getInitValues: () => FoodItem[];
  onChange: (values: FoodItem[]) => void;
}
const FoodForm: FC<FoodFormProps> = memo(
  (props) => {
    const [filterString, setFilterString] = useState("");
    const [items, setFoodItems] = useState(props.getInitValues);

    // god have mercy on my soul
    useEffect(() => {
      props.onChange(items.filter((item) => item.amount > 0));
    }, [props, items]);

    const handleAmountChange = (value: number, item_name: string) => {
      setFoodItems((prev) => {
        let target_index = -1;
        let usable = FOOD_ITEM_MAX;
        prev.forEach(({ name, amount }, index) => {
          if (name === item_name) {
            target_index = index;
            return;
          }
          usable -= amount;
        });

        const amount = value > usable ? usable : value;

        let next: FoodItem[] = [...prev];
        next[target_index] = { ...prev[target_index], amount };
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
          <Stack
            sx={{
              height: 350,
              justifyContent: "space-between",
            }}
          >
            <Paper elevation={4}>
              <TextField
                value={filterString}
                onChange={handleFilterStringChange}
                fullWidth
                variant="outlined"
                label="Filter Items"
                InputProps={{
                  startAdornment: <FilterAlt />,
                }}
              />
            </Paper>
            <Box
              sx={{
                height: 250,
                overflowY: "auto",
              }}
            >
              <FoodList
                isFull={leftover === 0}
                items={filterItems(filterString, items)}
                onChange={handleAmountChange}
              />
            </Box>
          </Stack>
        }
        backTitleIcon={<AutoAwesome />}
        backTitle="Active Effects"
        backContent={
          <Box sx={{ height: 350, overflowY: "auto" }}>
            <BuffList items={items} />
          </Box>
        }
      />
    );
  },
  (prev, next) => {
    return true;
  },
);

export default FoodForm;
