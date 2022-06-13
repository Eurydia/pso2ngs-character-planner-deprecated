import { FC, HTMLAttributes, memo, SyntheticEvent } from "react";
import {
  Autocomplete,
  TextField,
  Typography,
  FilterOptionsState,
  Tooltip,
  MenuItem,
  Paper,
  Box,
} from "@mui/material";
import { Info } from "@mui/icons-material";
import { matchSorter } from "match-sorter";
import { parseStatToDisplay } from "../../../utility";
import { StatTypes } from "../../../assets/stats";
import UNITS, { getUnitDEF, UnitData } from "../../../assets/units";

const renderOption = (
  props: HTMLAttributes<HTMLLIElement>,
  option: UnitData,
  enhancement: number,
) => {
  const def = getUnitDEF(
    option.base_defense,
    option.rarity,
    enhancement,
  ).amount;

  return (
    <MenuItem {...props}>
      <Tooltip
        arrow
        title={
          <Box
            sx={{
              textTransform: "capitalize",
            }}
          >
            <Typography>{`+${def} ${StatTypes.DEF}`}</Typography>
            {option.payload.stats.map((stat) => (
              <Typography key={stat.stat_type}>
                {`${parseStatToDisplay(stat)} ${stat.stat_type}`}
              </Typography>
            ))}
          </Box>
        }
        placement="right"
      >
        <Box sx={{ textTransform: "capitalize" }}>
          <Typography>{option.name}</Typography>
          <Typography noWrap fontSize="small">
            {`level required ${option.level_required}`}
          </Typography>
        </Box>
      </Tooltip>
    </MenuItem>
  );
};

const filterOptions = (
  options: UnitData[],
  state: FilterOptionsState<UnitData>,
): UnitData[] => {
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
          keys: ["name", "rarity"],
        }),
      options,
    )
    .slice(0, 16)
    .sort((a, b) => a.rarity - b.rarity);
  return result;
};

interface UnitSearchProps {
  isRealistic: boolean;
  charLevel: number;
  enhancement: number;
  value: null | UnitData;
  onChange: (value: null | UnitData) => void;
}
const UnitSearch: FC<UnitSearchProps> = memo(
  (props) => {
    const handleChange = (
      event: SyntheticEvent<Element, Event>,
      value: null | UnitData,
    ) => {
      props.onChange(value);
    };

    const showInfoIcon = props.value === null && props.isRealistic;
    return (
      <Autocomplete
        value={props.value}
        // -------
        options={UNITS}
        onChange={handleChange}
        filterOptions={filterOptions}
        renderOption={(p, o) => renderOption(p, o, props.enhancement)}
        isOptionEqualToValue={(o, v) => o.name === v.name}
        getOptionDisabled={(option) =>
          props.isRealistic && option.level_required > props.charLevel
        }
        getOptionLabel={(option) => option.name}
        groupBy={(option) => `${option.rarity}*`}
        renderInput={(params) => (
          <Paper elevation={4}>
            <TextField
              required
              {...params}
              fullWidth
              label="Weapon"
              InputProps={{
                ...params.InputProps,
                endAdornment: showInfoIcon ? (
                  <Tooltip
                    arrow
                    title="Select a weapon to unlock other fields."
                    placement="top"
                  >
                    <Info color="info" />
                  </Tooltip>
                ) : (
                  params.InputProps.endAdornment
                ),
              }}
            />
          </Paper>
        )}
      />
    );
  },
  (prev, next) => {
    if (prev.isRealistic !== next.isRealistic) {
      return false;
    }

    if (prev.charLevel !== next.charLevel) {
      return false;
    }

    if (prev.enhancement !== next.enhancement) {
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
      prev.value.name !== next.value.name
    ) {
      return false;
    }

    return true;
  },
);

export default UnitSearch;
