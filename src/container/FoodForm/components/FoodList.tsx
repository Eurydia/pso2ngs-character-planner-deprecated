import { ChangeEvent, FC, memo } from "react";
import {
  Typography,
  TextField,
  Grid,
  Paper,
  Box,
  Stack,
  Divider,
  Tooltip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FOOD_ITEM_MAX, FOOD_ITEM_MIN } from "../../../stores";
import {
  FoodItem,
  FoodAttribute,
  FoodCategory,
} from "../../../assets/food";

const CATEGORY_EFFECT: { [key: string]: string } = Object.freeze({
  MEAT: "+ potency [meat]",
  FRUIT: "+ PP [fruit]",
  VEGETABLE: "+ DMG resist [vegetable]",
  SEAFOOD: "+ HP [seafood]",
});

const ATTRIBUTE_EFFECT: { [key: string]: string } = Object.freeze({
  CRISPY: "+ weak point DMG [crispy]",
  LIGHT: "+ PP recovery [light]",
  ROBUST: "+ HP recovery [robust]",
  RICH: "- PP cost [rich]",
});

interface FoodListItemProps {
  isDisabled: boolean;
  name: string;
  attribute: FoodAttribute;
  category: FoodCategory;
  value: number;
  onChange: (value: number) => void;
}
const FoodListItem: FC<FoodListItemProps> = memo(
  (props) => {
    const theme = useTheme();
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
      <Box paddingX={2}>
        <Grid
          container
          columnSpacing={2}
          sx={{
            alignItems: "center",
          }}
        >
          <Grid item md={4}>
            <Tooltip
              arrow
              placement="right"
              title={
                <Box
                  sx={{
                    textTransform: "capitalize",
                  }}
                >
                  <Typography>
                    {CATEGORY_EFFECT[props.category]}
                  </Typography>
                  <Typography>
                    {ATTRIBUTE_EFFECT[props.attribute]}
                  </Typography>
                </Box>
              }
            >
              <Typography
                sx={{
                  textTransform: "capitalize",
                  fontWeight: props.value > 0 ? 500 : undefined,
                  color:
                    props.value > 0
                      ? theme.palette.primary.main
                      : undefined,
                }}
              >
                {props.name}
              </Typography>
            </Tooltip>
          </Grid>
          <Grid item md={4}></Grid>
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
      </Box>
    );
  },
  (prev, next) => {
    if (prev.name !== next.name) {
      return false;
    }

    if (prev.value !== next.value) {
      return false;
    }

    if (prev.isDisabled !== next.isDisabled) {
      return false;
    }
    return true;
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
      <Stack spacing={1} divider={<Divider flexItem />}>
        {props.items.map((item) => (
          <FoodListItem
            key={item.name}
            isDisabled={props.isFull && item.amount === 0}
            name={item.name.toLowerCase()}
            category={item.category}
            attribute={item.attribute}
            value={item.amount}
            onChange={(v) => props.onChange(v, item.name)}
          />
        ))}
      </Stack>
    );
  },
  (prev, next) => {
    // check `slotIsFull`
    if (prev.isFull !== next.isFull) {
      return false;
    }

    // check `items`
    if (prev.items.length !== next.items.length) {
      return false;
    }
    for (let i = 0; i < prev.items.length; i++) {
      const prev_val = prev.items[i];
      const next_val = next.items[i];
      if (prev_val.amount !== next_val.amount) {
        return false;
      }
      if (prev_val.name !== next_val.name) {
        return false;
      }
    }
    return true;
  },
);
export default FoodList;
