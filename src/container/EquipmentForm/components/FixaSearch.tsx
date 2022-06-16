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
import FIXAS, { FixaData, FixaTypes } from "../../../assets/fixas";
import { parseNumberToDisplay } from "../../../utility";
import { isStatAddType } from "../../../assets/stats";

const getWeaponOptions = () => {
  return FIXAS.filter((fixa) => fixa.fixa_type === FixaTypes.WEAPON);
};

const getUnitOption = () => {
  return FIXAS.filter((fixa) => fixa.fixa_type === FixaTypes.UNIT);
};

const getLabel = (fixa: FixaData): string => {
  return `${fixa.name} lv. ${fixa.level}`;
};

const renderOption = (
  props: HTMLAttributes<HTMLLIElement>,
  option: FixaData,
  _: AutocompleteRenderOptionState,
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
            {option.payload.stats.map(({ stat_type, amount }) => {
              const parsed_amount = parseNumberToDisplay(
                amount,
                isStatAddType(stat_type),
              );
              return (
                <Typography key={stat_type}>
                  {`${parsed_amount} ${stat_type}`}
                </Typography>
              );
            })}
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
  options: FixaData[],
  state: FilterOptionsState<FixaData>,
): FixaData[] => {
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

  const SORT_ORDER = [
    "attack",
    "fatale",
    "termina",
    "guard",
    "performa",
    "natura",
    "enthusia",
  ];

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
  value: FixaData | null;
  onChange: (value: FixaData | null) => void;
}
const FixaSearch: FC<FixaSearchProps> = memo(
  (props) => {
    const handleChange = (
      _: SyntheticEvent<Event | Element>,
      value: null | FixaData,
    ) => {
      props.onChange(value);
    };
    return (
      <Autocomplete
        disabled={props.isDisabled}
        value={props.value}
        options={
          props.mode === "weapon"
            ? getWeaponOptions()
            : getUnitOption()
        }
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
