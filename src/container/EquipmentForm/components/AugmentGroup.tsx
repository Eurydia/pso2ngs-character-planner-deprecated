import { FC, HTMLAttributes, memo, SyntheticEvent } from "react";
import {
  Autocomplete,
  Stack,
  Box,
  TextField,
  Typography,
  Grid,
  FilterOptionsState,
  MenuItem,
  Tooltip,
  Paper,
} from "@mui/material";
import { matchSorter } from "match-sorter";
import { convertToRoman, parseStatToDisplay } from "../../../utility";
import AUGMENTS, {
  AugmentData,
  AugmentGroups,
} from "../../../assets/augments";

const getOptions = () => {
  return [...AUGMENTS];
};

const getLabel = (augment: AugmentData): string => {
  const name = augment.isSType ? `${augment.name} s` : augment.name;

  return `${name} ${convertToRoman(augment.level)}`.trim();
};

const renderOption = (
  props: HTMLAttributes<HTMLLIElement>,
  option: AugmentData,
) => {
  return (
    <MenuItem {...props}>
      <Tooltip
        arrow
        title={
          <Stack
            sx={{
              textTransform: "capitalize",
            }}
          >
            {option.payload.stats.map((stat) => (
              <Typography key={stat.stat_type}>
                {`${parseStatToDisplay(stat)} ${stat.stat_type} `}
              </Typography>
            ))}
            {option.payload.conditionals.map((conditional) => (
              <Stack key={conditional.condition}>
                <Typography>{conditional.condition}</Typography>
                <Stack paddingX={2}>
                  {conditional.stats.map((stat) => (
                    <Typography key={stat.stat_type}>
                      {`${parseStatToDisplay(stat)} ${
                        stat.stat_type
                      } `}
                    </Typography>
                  ))}
                </Stack>
              </Stack>
            ))}
          </Stack>
        }
        placement="right"
      >
        <Typography
          sx={{
            textTransform: "capitalize",
          }}
        >
          {getLabel(option)}
        </Typography>
      </Tooltip>
    </MenuItem>
  );
};

const filterOptions = (
  options: AugmentData[],
  state: FilterOptionsState<AugmentData>,
) => {
  const input_value = state.inputValue.normalize();
  if (!input_value) {
    return options.slice(0, 16);
  }

  const terms = input_value
    .split(" ")
    .map((term) => term.trim())
    .filter((term) => Boolean(term));
  if (terms.length === 0) {
    return options.slice(0, 16);
  }

  const result = terms
    .reduceRight(
      (res, term) =>
        matchSorter(res, term, {
          keys: ["name", "level", "group"],
        }),
      options,
    )
    .slice(0, 16)
    .sort((a, b) => {
      if (a.group > b.group) {
        return 1;
      }
      if (a.group < b.group) {
        return -1;
      }
      return 0;
    });
  return result;
};

interface AugmentSearchProps {
  isDisabled: boolean;
  label: string;
  value: AugmentData | null;
  onChange: (value: AugmentData | null) => void;
}
const AugmentSearch: FC<AugmentSearchProps> = memo(
  (props) => {
    const handleChange = (
      e: SyntheticEvent<Element, Event>,
      value: AugmentData | null,
    ) => {
      props.onChange(value);
    };
    return (
      <Autocomplete
        disabled={props.isDisabled}
        value={props.value}
        // -------------
        options={getOptions()}
        onChange={handleChange}
        getOptionLabel={getLabel}
        renderOption={renderOption}
        filterOptions={filterOptions}
        groupBy={(option) => option.group}
        renderInput={(params) => (
          <Paper elevation={props.isDisabled ? 0 : 4}>
            <TextField {...params} label={props.label} />
          </Paper>
        )}
      />
    );
  },
  (prev, next) => {
    // check `isDisabled`
    if (prev.isDisabled !== next.isDisabled) {
      return false;
    }

    // check `value`
    const prev_val = prev.value;
    const next_val = next.value;
    if (
      (prev_val === null && next_val) ||
      (prev_val && next_val === null)
    ) {
      return false;
    } else if (
      prev_val &&
      next_val &&
      (prev_val.name !== next_val.name ||
        prev_val.level !== next_val.level ||
        prev_val.isSType !== next_val.isSType)
    ) {
      return false;
    }

    return true;
  },
);

const augmentsDoConflict = (
  next: AugmentData,
  prev: AugmentData,
): boolean => {
  if (next.name === prev.name) {
    return true;
  }

  if (
    next.conflict.includes(prev.group) &&
    !(next.group === AugmentGroups.FUSED && prev.name === "mastery")
  ) {
    return true;
  }

  return false;
};

const constrainAugments = (
  new_augment: AugmentData | null,
  target_index: number,
  prev_augments: (AugmentData | null)[],
): (AugmentData | null)[] => {
  let next = [...prev_augments];
  next[target_index] = new_augment;
  if (new_augment === null) {
    return next;
  }

  for (let i = 0; i < prev_augments.length; i++) {
    if (i === target_index) {
      continue;
    }

    const prev_augment = prev_augments[i];
    if (
      prev_augment &&
      augmentsDoConflict(new_augment, prev_augment)
    ) {
      next[i] = null;
    }
  }

  return next;
};

const getActiveSlots = (enhancement: number): number => {
  return enhancement >= 20
    ? 1 + Math.floor((enhancement - 10) / 10)
    : 1;
};

interface AugmentGroupProps {
  disabled: boolean;
  enhancement: number;
  values: (AugmentData | null)[];
  onChange: (values: (AugmentData | null)[]) => void;
}
const AugmentGroup: FC<AugmentGroupProps> = memo(
  (props) => {
    const handleChange = (
      augment: AugmentData | null,
      index: number,
    ) => {
      props.onChange(constrainAugments(augment, index, props.values));
    };

    const active_slots = getActiveSlots(props.enhancement);

    return (
      <Box>
        <Grid container columns={2} spacing={2}>
          {props.values.map((value, i) => (
            <Grid item xs={2} sm={1} key={`augment-${i}`}>
              <AugmentSearch
                value={value}
                onChange={(value) => handleChange(value, i)}
                isDisabled={props.disabled || i >= active_slots}
                label="Augment"
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  },
  (prev, next) => {
    // ----------------
    if (prev.disabled !== next.disabled) {
      return false;
    }

    // ----------------
    if (prev.enhancement !== next.enhancement) {
      return false;
    }

    // ----------------
    if (prev.values.length !== next.values.length) {
      return false;
    }
    for (let i = 0; i < prev.values.length; i++) {
      const prev_val = prev.values[i];
      const next_val = next.values[i];
      if (
        (prev_val === null && next_val) ||
        (prev_val && next_val === null)
      ) {
        return false;
      } else if (
        prev_val &&
        next_val &&
        (prev_val.name !== next_val.name ||
          prev_val.level !== next_val.level ||
          prev_val.isSType !== next_val.isSType)
      ) {
        return false;
      }
    }

    return true;
  },
);

export default AugmentGroup;
