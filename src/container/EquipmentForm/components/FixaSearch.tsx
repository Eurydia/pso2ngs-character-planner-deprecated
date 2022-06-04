import { FC, HTMLAttributes, memo, SyntheticEvent } from "react";
import {
  Autocomplete,
  Stack,
  TextField,
  Typography,
  MenuItem,
  Tooltip,
  AutocompleteRenderOptionState,
  FilterOptionsState,
  Paper,
} from "@mui/material";
import { matchSorter } from "match-sorter";
import { UNIT_FIXA, WEAPON_FIXA } from "../../../assets/fixas";
import { parseStatToDisplay } from "../../../utility";
import { Fixa, Stat } from "../../../types";

const SORT_ORDER = [
  "attack",
  "fatale",
  "termina",
  "guard",
  "performa",
  "natura",
  "enthusia",
];

const getLabel = (fixa: Fixa): string => {
  return `${fixa.name} lv. ${fixa.level}`;
};

const getStatsAsTooltip = (stats: Stat[]): JSX.Element[] => {
  return stats.map((stat) => (
    <Typography key={stat.stat_type}>
      {`${parseStatToDisplay(stat)} ${stat.stat_type}`}
    </Typography>
  ));
};

const renderOption = (
  props: HTMLAttributes<HTMLLIElement>,
  option: Fixa,
  state: AutocompleteRenderOptionState,
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
            {getStatsAsTooltip(option.stats)}
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
  options: Fixa[],
  state: FilterOptionsState<Fixa>,
): Fixa[] => {
  const input_value = state.inputValue.trim().normalize();
  if (!input_value) {
    return options;
  }
  const terms = input_value
    .split(" ")
    .map((term) => term.trim())
    .filter((term) => Boolean(term));
  if (terms.length === 0) {
    return options;
  }
  const result = terms
    .reduceRight(
      (res, term) =>
        matchSorter(res, term, {
          keys: ["name", "level"],
        }),
      options,
    )
    .sort(
      (a, b) =>
        SORT_ORDER.indexOf(a.name) - SORT_ORDER.indexOf(b.name),
    );
  return result;
};

interface FixaSearchProps {
  mode: "weapon" | "unit";
  isDisabled: boolean;
  value: Fixa | null;
  onChange: (value: Fixa | null) => void;
}
const FixaSearch: FC<FixaSearchProps> = memo(
  (props) => {
    const handleChange = (
      event: SyntheticEvent<Event | Element>,
      value: null | Fixa,
    ) => {
      props.onChange(value);
    };
    return (
      <Autocomplete
        disabled={props.isDisabled}
        value={props.value}
        options={props.mode === "weapon" ? WEAPON_FIXA : UNIT_FIXA}
        // -----------
        onChange={handleChange}
        getOptionLabel={getLabel}
        renderOption={renderOption}
        filterOptions={filterOptions}
        groupBy={(option) => option.name.toUpperCase()}
        renderInput={(params) => (
          <Paper elevation={props.isDisabled ? 0 : 4}>
            <TextField {...params} fullWidth label="Fixa" />
          </Paper>
        )}
      />
    );
  },
  (prev, next) => {
    if (prev.isDisabled !== next.isDisabled) {
      return false;
    }

    if (
      (prev.value === null && next.value) ||
      (prev.value && next.value === null)
    ) {
      return false;
    }

    if (
      prev.value &&
      next.value &&
      (prev.value.name !== next.value.name ||
        prev.value.level !== next.value.level)
    ) {
      return false;
    }

    return true;
  },
);
export default FixaSearch;
