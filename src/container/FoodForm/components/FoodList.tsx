import { ChangeEvent, FC, memo } from "react";
import {
  Typography,
  TextField,
  Grid,
  Paper,
  Box,
  Stack,
  Tooltip,
} from "@mui/material";
import { FOOD_ITEM_MAX, FOOD_ITEM_MIN } from "../../../stores";
import {
  FoodItem,
  FoodAttribute,
  FoodCategory,
} from "../../../assets/food";
import { grey } from "@mui/material/colors";

const CATEGORY_EFFECT_TOOLTIP: { [key: string]: string } = {
  MEAT: "+ potency [meat]",
  FRUIT: "+ PP [fruit]",
  VEGETABLE: "+ DMG resist [vegetable]",
  SEAFOOD: "+ HP [seafood]",
};

const ATTRIBUTE_EFFECT_TOOPTIP: { [key: string]: string } = {
  CRISPY: "+ weak point DMG [crispy]",
  LIGHT: "+ PP recovery [light]",
  ROBUST: "+ HP recovery [robust]",
  RICH: "- PP cost [rich]",
};

interface FoodListItemProps {
  // static
  attribute: FoodAttribute;
  category: FoodCategory;
  // dynamic
  backgroundColor?: string;
  isDisabled: boolean;
  name: string;
  value: number;
  onChange: (value: number) => void;
}
const FoodListItem: FC<FoodListItemProps> = memo(
  (props) => {
    const handleChange = (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      const value = event.target.value;

      let amount = value ? parseInt(value) : FOOD_ITEM_MIN;
      if (amount < FOOD_ITEM_MIN) {
        amount = FOOD_ITEM_MIN;
      } else if (amount > FOOD_ITEM_MAX) {
        amount = FOOD_ITEM_MAX;
      }
      props.onChange(amount);
    };
    return (
      <Grid
        container
        paddingY={1}
        paddingX={2}
        alignItems="center"
        textTransform="capitalize"
        sx={{
          backgroundColor: props.backgroundColor,
        }}
      >
        <Grid item md>
          <Tooltip
            placement="right"
            title={
              <Stack
                sx={{
                  textTransform: "capitalize",
                }}
              >
                <Typography>
                  {CATEGORY_EFFECT_TOOLTIP[props.category]}
                </Typography>
                <Typography>
                  {ATTRIBUTE_EFFECT_TOOPTIP[props.attribute]}
                </Typography>
              </Stack>
            }
          >
            <Typography
              noWrap
              fontWeight={props.value > 0 ? "500" : undefined}
            >
              {props.name}
            </Typography>
          </Tooltip>
        </Grid>
        <Grid item md />
        <Grid item md={3}>
          <Paper elevation={props.isDisabled ? 0 : 4}>
            <TextField
              disabled={props.isDisabled}
              value={props.value}
              onChange={handleChange}
              fullWidth
              type="number"
              size="small"
            />
          </Paper>
        </Grid>
      </Grid>
    );
  },
  (prev, next) => {
    return false;
  },
);

interface FoodListProps {
  isFull: boolean;
  items: FoodItem[];
  onChange: (value: number, item_name: string) => void;
}
const FoodList: FC<FoodListProps> = memo(
  (props) => {
    return (
      <Box height={300} overflow="auto">
        {props.items.map(
          ({ name, category, attribute, amount }, index) => (
            <FoodListItem
              key={name}
              backgroundColor={
                index % 2 === 1 ? grey[100] : undefined
              }
              isDisabled={props.isFull && amount === 0}
              name={name.toLowerCase()}
              category={category}
              attribute={attribute}
              value={amount}
              onChange={(v) => props.onChange(v, name)}
            />
          ),
        )}
      </Box>
    );
  },
  (prev, next) => {
    if (
      prev.isFull !== next.isFull ||
      prev.items.length !== next.items.length
    ) {
      return false;
    }
    for (let i = 0; i < prev.items.length; i++) {
      const prev_val = prev.items[i];
      const next_val = next.items[i];
      if (
        prev_val.name !== next_val.name ||
        prev_val.amount !== next_val.amount
      ) {
        return false;
      }
    }
    return true;
  },
);
export default FoodList;
