import {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  memo,
  ReactNode,
  useState,
} from "react";
import {
  Typography,
  TextField,
  Grid,
  Paper,
  Box,
  Stack,
  Tooltip,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { matchSorter } from "match-sorter";
import {
  FOOD_ITEM_MAX,
  FOOD_ITEM_MIN,
} from "../../../assets/constants";
import {
  FoodItem,
  FoodAttribute,
  FoodCategory,
} from "../../../assets/food";
import { FilterAlt } from "@mui/icons-material";

const CATEGORY_EFFECT: { [key: string | FoodCategory]: string } = {
  MEAT: "+ potency [meat]",
  FRUIT: "+ PP [fruit]",
  VEGETABLE: "+ DMG resist [vegetable]",
  SEAFOOD: "+ HP [seafood]",
};

const ATTRIBUTE_EFFECT: { [key: string | FoodAttribute]: string } = {
  CRISPY: "+ weak point DMG [crispy]",
  LIGHT: "+ PP recovery [light]",
  ROBUST: "+ HP recovery [robust]",
  RICH: "- PP cost [rich]",
};

const clampNumber = (
  number: number,
  min: number,
  max: number,
): number => {
  if (number < min) {
    return min;
  } else if (number > max) {
    return max;
  }
  return number;
};

const filterItems = (
  filter_string: string,
  items: FoodItem[],
): FoodItem[] => {
  const terms: string[] = filter_string
    .split(" ")
    .map((term) => term.trim())
    .filter((term) => Boolean(term));

  if (terms.length === 0) {
    return items.filter((item) => item.amount > 0);
  }

  const filtered_items = terms.reduceRight(
    (res, term) =>
      matchSorter(res, term, {
        keys: [
          (item) => item.name,
          (item) => item.attribute,
          (item) => item.category,
        ],
      }),
    items,
  );
  return filtered_items;
};

interface CustomNumberFieldProps {
  disabled: boolean;
  value: number;
  onChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
}
const CustomNumberField: FC<CustomNumberFieldProps> = memo(
  ({ disabled, value, onChange }) => {
    return (
      <Paper elevation={disabled ? 0 : 4}>
        <TextField
          disabled={disabled}
          value={value}
          onChange={onChange}
          fullWidth
          type="number"
          size="small"
        />
      </Paper>
    );
  },
  (prev, next) => {
    if (
      prev.disabled !== next.disabled ||
      prev.value !== next.value
    ) {
      return false;
    }
    return true;
  },
);

interface CustomTextFieldProps {
  value: string;
  onChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
}
const CustomTextField: FC<CustomTextFieldProps> = memo(
  ({ value, onChange }) => {
    return (
      <Paper elevation={4}>
        <TextField
          value={value}
          onChange={onChange}
          fullWidth
          variant="outlined"
          label="Filter Items"
          InputProps={{
            startAdornment: <FilterAlt />,
          }}
        />
      </Paper>
    );
  },
  (prev, next) => {
    if (prev.value !== next.value) {
      return false;
    }
    return true;
  },
);

interface CustomTooltipProps {
  bold: boolean;
  name: string | number;
  category: string | FoodCategory;
  attribute: string | FoodAttribute;
}
const CustomTooltip: FC<CustomTooltipProps> = memo(
  ({ bold, name, category, attribute }) => {
    return (
      <Tooltip
        placement="right"
        title={
          <Stack textTransform="capitalize">
            <Typography>{CATEGORY_EFFECT[category]}</Typography>
            <Typography>{ATTRIBUTE_EFFECT[attribute]}</Typography>
          </Stack>
        }
      >
        <Typography noWrap fontWeight={bold ? "500" : undefined}>
          {name}
        </Typography>
      </Tooltip>
    );
  },
  (prev, next) => {
    if (
      prev.bold !== next.bold ||
      prev.name !== next.name ||
      prev.attribute !== next.attribute ||
      prev.category !== next.category
    ) {
      return false;
    }
    return true;
  },
);

interface CustomListItemProps {
  backgroundColor?: string;
  nameSlot: ReactNode;
  numberFieldSlot: ReactNode;
}
const CustomListItem: FC<CustomListItemProps> = memo(
  ({ backgroundColor, nameSlot, numberFieldSlot }) => {
    return (
      <Grid
        container
        paddingY={1}
        paddingX={2}
        alignItems="center"
        textTransform="capitalize"
        sx={{
          backgroundColor,
        }}
      >
        <Grid item md>
          {nameSlot}
        </Grid>
        <Grid item md />
        <Grid item md={3}>
          {numberFieldSlot}
        </Grid>
      </Grid>
    );
  },
  (prev, next) => {
    if (prev.backgroundColor !== next.backgroundColor) {
      return false;
    }
    return true;
  },
);

interface CustomListProps {
  listItemsSlot: ReactNode;
}
const CustomList: FC<CustomListProps> = (props) => {
  return (
    <Box height={300} overflow="auto">
      {props.listItemsSlot}
    </Box>
  );
};

interface FoodListItemProps {
  disabled: boolean;
  backgroundColor?: string;
  name: string;
  attribute: FoodAttribute;
  category: FoodCategory;
  value: number;
  onChange: (value: number) => void;
}
const FoodListItem: FC<FoodListItemProps> = memo(
  ({
    disabled,
    backgroundColor,
    name,
    attribute,
    category,
    value,
    onChange,
  }) => {
    const handleChange = (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      // "string" value of the text field.
      // this can be an empty string.
      const string_value: string = event.target.value;

      // making sure that a number is an integer
      // regardless of the `string value`.
      const value: number = Number.isInteger(string_value)
        ? parseInt(string_value)
        : FOOD_ITEM_MIN;

      const clamped_value = clampNumber(
        value,
        FOOD_ITEM_MIN,
        FOOD_ITEM_MAX,
      );
      onChange(clamped_value);
    };

    return (
      <CustomListItem
        backgroundColor={backgroundColor}
        nameSlot={
          <CustomTooltip
            name={name}
            attribute={attribute}
            category={category}
            bold={value > 0}
          />
        }
        numberFieldSlot={
          <CustomNumberField
            value={value}
            onChange={handleChange}
            disabled={disabled}
          />
        }
      />
    );
  },
  (prev, next) => {
    if (
      prev.backgroundColor !== next.backgroundColor ||
      prev.disabled !== next.disabled ||
      prev.name !== next.name ||
      prev.attribute !== next.attribute ||
      prev.category !== next.category ||
      prev.value !== next.value
    ) {
      return false;
    }
    return true;
  },
);

interface FoodListProps {
  items: FoodItem[];
  onChange: (value: number, item_name: string) => void;
}
const FoodList: FC<FoodListProps> = (props) => {
  const [filterString, setFilterString] = useState("");

  const handleFilterStringChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const string_value = event.target.value;
    const value = string_value.normalize();
    setFilterString(value);
  };

  // count the number of used items
  let used = FOOD_ITEM_MIN;
  for (const item of props.items) {
    used += item.amount;
  }

  return (
    <Stack spacing={4}>
      <CustomTextField
        value={filterString}
        onChange={handleFilterStringChange}
      />
      <CustomList
        listItemsSlot={filterItems(filterString, props.items).map(
          ({ name, amount, attribute, category }, index) => (
            <FoodListItem
              key={name}
              disabled={used >= FOOD_ITEM_MAX && amount === 0}
              backgroundColor={
                index % 2 === 0 ? undefined : grey[400]
              }
              name={name}
              value={amount}
              attribute={attribute}
              category={category}
              onChange={(value) => props.onChange(value, name)}
            />
          ),
        )}
      />
    </Stack>
  );
};

export default FoodList;
