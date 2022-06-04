import { FC, HTMLAttributes, memo, SyntheticEvent } from "react";
import {
  Autocomplete,
  Stack,
  TextField,
  Typography,
  FilterOptionsState,
  Tooltip,
  MenuItem,
  AutocompleteRenderOptionState,
  Paper,
  Box,
} from "@mui/material";
import { Info } from "@mui/icons-material";
import { matchSorter } from "match-sorter";
import { parseStatToDisplay } from "../../../utility";
import { Equipment, Weapon, Unit, Stat } from "../../../types";

const getStatsAsTooltip = (stats: Stat[]): JSX.Element[] => {
  return stats.map((stat) => (
    <Typography key={stat.stat_type}>
      {`${parseStatToDisplay(stat)} ${stat.stat_type}`}
    </Typography>
  ));
};

const renderOption = (
  props: HTMLAttributes<HTMLLIElement>,
  option: Equipment,
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
        <Box>
          <Typography
            sx={{
              textTransform: "capitalize",
            }}
          >
            {option.name}
          </Typography>
          <Typography
            fontSize="small"
            sx={{
              textTransform: "capitalize",
            }}
          >
            {`level required ${option.level_required}`}
          </Typography>
        </Box>
      </Tooltip>
    </MenuItem>
  );
};

const filterOptions = <T extends Equipment>(
  options: T[],
  state: FilterOptionsState<T>,
): T[] => {
  const input_value = state.inputValue.normalize();
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
          keys: ["name", "rarity"],
        }),
      options,
    )
    .sort((a, b) => a.rarity - b.rarity);
  return result;
};

interface EquipmentSearchProps<T extends Weapon | Unit> {
  isRealistic: boolean;
  charLevel: number;
  options: T[];
  value: null | T;
  onChange: (value: null | T) => void;
}
const EquipmentSearch: FC<EquipmentSearchProps<Weapon | Unit>> = memo(
  (props) => {
    const handleChange = (
      event: SyntheticEvent<Element, Event>,
      value: Equipment | null,
    ) => {
      props.onChange(value);
    };

    const showInfoIcon = props.value === null && props.isRealistic;
    return (
      <Autocomplete
        value={props.value}
        options={props.options}
        // -------
        onChange={handleChange}
        filterOptions={filterOptions}
        renderOption={renderOption}
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
              label={props.mode === "weapon" ? "Weapon" : "Unit"}
              InputProps={{
                ...params.InputProps,
                endAdornment: showInfoIcon ? (
                  <Tooltip
                    arrow
                    title={`Select a ${props.mode} to unlock other fields.`}
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

export default EquipmentSearch;
