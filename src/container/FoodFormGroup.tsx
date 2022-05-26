import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  TextField,
  Tooltip,
  IconButton,
  Autocomplete,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { ChangeEvent, FC, SyntheticEvent, useState } from "react";
import { parseStatToDisplay } from "../utility";
import {
  Conditional,
  Stat,
  Food,
  FoodWithAmount,
  FoodCategory,
  FoodAttribute,
} from "../types";
import {
  GENERIC_FOOD,
  SEASONAL_FOOD,
  getStatFromCategory,
  getStatFromAttribute,
} from "../assets/food";

const MAX_FOOD_ITEM = 10;
const MIN_FOOD_ITEM = 1;

const getFoodItemLeftover = (food_items: FoodWithAmount[]) => {
  let leftover = MAX_FOOD_ITEM;
  food_items.forEach((item) => {
    leftover -= item.amount;
  });
  return leftover;
};

const getActiveBuffs = (items: FoodWithAmount[]) => {
  let categories: {
    [keys in FoodCategory]: {
      name: string;
      level: number;
    };
  } = {
    MEAT: { name: "potency [meat]", level: 0 },
    FRUIT: { name: "PP [fruit]", level: 0 },
    VEGETABLE: {
      name: "DMG resist [vegetable]",
      level: 0,
    },
    SEAFOOD: { name: "HP [seafood]", level: 0 },
  };
  let attributes: {
    [keys in FoodAttribute]: {
      name: string;
      level: number;
    };
  } = {
    CRISPY: {
      name: "weak point DMG [crispy]",
      level: 0,
    },
    LIGHT: {
      name: "PP recovery [light]",
      level: 0,
    },
    ROBUST: {
      name: "HP recovery [robust]",
      level: 0,
    },
    RICH: { name: "PP cost [rich]", level: 0 },
  };

  items.forEach((item) => {
    const category = item.food.category as FoodCategory;
    const attribute = item.food.attribute as FoodAttribute;
    const amount = item.amount;
    categories[category].level += amount;
    attributes[attribute].level += amount;
  });

  let result: { name: string; level: number; amount: string }[] = [];
  for (const key of Object.keys(categories)) {
    const k = key as FoodCategory;
    const value = categories[k];
    if (value.level === 0) continue;

    result.push({
      ...value,
      amount: parseStatToDisplay(
        getStatFromCategory(k, value.level)[0],
      ),
    });
  }

  for (const key of Object.keys(attributes)) {
    const k = key as FoodAttribute;
    const value = attributes[k];
    if (value.level < 4) continue;

    if (k === FoodAttribute.CRISPY) {
      const conditional = getStatFromAttribute(
        k,
        value.level,
      )[0] as Conditional;
      result.push({
        ...value,
        amount: parseStatToDisplay(conditional.stats[0]),
      });
    } else {
      const stat = getStatFromAttribute(k, value.level)[0] as Stat;
      result.push({
        ...value,
        amount: parseStatToDisplay(stat),
      });
    }
  }
  return result;
};

interface FoodItemProps {
  value: FoodWithAmount;
  onAmountChange: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
  onDelete: () => void;
}
const FoodItem: FC<FoodItemProps> = (props) => {
  return (
    <Card
      variant="outlined"
      sx={{
        padding: 1,
      }}
    >
      <Grid
        container
        columns={8}
        sx={{
          alignItems: "center",
        }}
      >
        <Grid item xs={1}>
          <Tooltip title="delete item">
            <IconButton onClick={props.onDelete}>
              <Close />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={1}>
          <TextField
            size="small"
            type="number"
            label="amount"
            value={props.value.amount}
            onChange={(e) => props.onAmountChange(e)}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>{props.value.food.name}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

const ORDER = {
  [FoodCategory.MEAT]: 1,
  [FoodCategory.FRUIT]: 2,
  [FoodCategory.VEGETABLE]: 3,
  [FoodCategory.SEAFOOD]: 4,
};
const OPTIONS = [...GENERIC_FOOD, ...SEASONAL_FOOD].sort(
  (a, b) => ORDER[a.category] - ORDER[b.category],
);
interface FoodSelectProps {
  disabledOptions: Food[];
  value: Food | null;
  onChange: (value: Food | null) => void;
}
const FoodSelect: FC<FoodSelectProps> = (props) => {
  return (
    <Autocomplete
      value={props.value}
      onChange={(_, v) => props.onChange(v)}
      // -----------
      filterSelectedOptions
      options={OPTIONS}
      groupBy={(option) => option.category}
      getOptionLabel={(option) => option.name.toLowerCase()}
      getOptionDisabled={(option) =>
        props.disabledOptions.includes(option)
      }
      renderInput={(params) => (
        <TextField {...params} label="select food" variant="filled" />
      )}
    />
  );
};

interface FoodSelectGroupProps {}
const FoodSelectGroup: FC<FoodSelectGroupProps> = (props) => {
  const [foodItems, setFoodItems] = useState<FoodWithAmount[]>([]);
  const [itemToAdd, setItemToAdd] = useState<Food | null>(null);
  const [tab, setTab] = useState(0);

  const handleItemAdd = () => {
    if (itemToAdd) {
      setFoodItems((prev) => {
        let next = [...prev];
        next.push({ food: itemToAdd, amount: 1 });
        return next;
      });
    }
    setItemToAdd(null);
  };

  const handleItemAmountChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number,
  ) => {
    setFoodItems((prev) => {
      const value = event.target.value;

      let new_amount: number;
      if (!value) {
        new_amount = MIN_FOOD_ITEM;
      } else {
        let leftover = MAX_FOOD_ITEM;
        prev.forEach((item, item_index) => {
          if (item_index !== index) {
            leftover -= item.amount;
          }
        });

        new_amount = parseInt(value);
        if (new_amount > leftover) {
          new_amount = leftover;
        } else if (new_amount < MIN_FOOD_ITEM) {
          new_amount = MIN_FOOD_ITEM;
        }
      }
      let next = [...prev];
      next[index].amount = new_amount;
      return next;
    });
  };

  const handleItemRemove = (index: number) => {
    setFoodItems((prev) => {
      let next = [...prev];
      next.splice(index, 1);
      return next;
    });
  };

  const handleTabChange = (
    event: SyntheticEvent<Element, Event>,
    value: number,
  ) => setTab(value);

  const leftover = getFoodItemLeftover(foodItems);
  const shouldDisableAddBtn = leftover === 0 || itemToAdd === null;
  return (
    <Paper variant="outlined">
      <Stack
        spacing={2}
        sx={{
          padding: 2,
        }}
      >
        <Stack>
          <FoodSelect
            value={itemToAdd}
            onChange={setItemToAdd}
            disabledOptions={foodItems.map((v) => v.food)}
          />
          <Button
            disabled={shouldDisableAddBtn}
            onClick={handleItemAdd}
            variant="contained"
            color="primary"
          >
            {`add (used ${
              MAX_FOOD_ITEM - leftover
            }/${MAX_FOOD_ITEM})`}
          </Button>
        </Stack>
        <Box>
          <Tabs value={tab} onChange={handleTabChange}>
            <Tab label="edit" value={0} />
            <Tab label="effects" value={1} />
          </Tabs>
          <Divider flexItem />
          <Stack
            spacing={1}
            sx={{
              height: 400,
              overflowY: "auto",
            }}
          >
            {tab === 0 &&
              foodItems.map((value, index) => (
                <FoodItem
                  key={value.food.name}
                  value={value}
                  onAmountChange={(e) =>
                    handleItemAmountChange(e, index)
                  }
                  onDelete={() => handleItemRemove(index)}
                />
              ))}
            {tab === 1 &&
              getActiveBuffs(foodItems).map((buff) => (
                <Card
                  key={buff.name}
                  variant="outlined"
                  sx={{ padding: 2 }}
                >
                  <Grid container>
                    <Grid item xs={8}>
                      <Typography>
                        {`${buff.name} (${buff.level})`}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography>{buff.amount}</Typography>
                    </Grid>
                  </Grid>
                </Card>
              ))}
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
};

export default FoodSelectGroup;
