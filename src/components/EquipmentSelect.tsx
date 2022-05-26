import { FC, HTMLAttributes } from "react";
import {
  Autocomplete,
  Stack,
  Box,
  TextField,
  Typography,
  FilterOptionsState,
} from "@mui/material";

import { parseStatToDisplay } from "../utility";
import { Equipment, Stat, Weapon, Unit } from "../types";
import { WEAPONS } from "../assets/weapons";
import { UNITS } from "../assets/units";
import { matchSorter } from "match-sorter";

const renderOptionStat = (stats: Stat[]) => {
  let parsed_stats: JSX.Element[] = [];
  for (const stat of stats) {
    const parsed_stat = `${parseStatToDisplay(stat)} ${
      stat.stat_type
    }`;
    parsed_stats.push(
      <Typography key={stat.stat_type}>{parsed_stat}</Typography>,
    );
  }
  return parsed_stats;
};

const renderOption = (
  props: HTMLAttributes<HTMLLIElement>,
  option: Equipment,
) => {
  const name = option.name;
  const stats = renderOptionStat(option.stats);

  return (
    <Box component="li" {...props}>
      <Stack direction="column">
        <Typography>{name}</Typography>
        <Stack paddingLeft={1}>{stats}</Stack>
      </Stack>
    </Box>
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
    .split("+")
    .map((term) => term.trim())
    .filter((term) => Boolean(term));
  if (terms.length === 0) {
    return options;
  }

  const result = terms.reduceRight(
    (res, term) =>
      matchSorter(res, term, {
        keys: ["name", "rarity"],
      }),
    options,
  );
  return result;
};

interface EquipmentSelectProps<T extends Weapon | Unit> {
  mode: "weapon" | "unit";
  label: string;
  value: null | T;
  onChange: (value: null | T) => void;
}
const EquipmentSelect: FC<EquipmentSelectProps<Weapon | Unit>> = (
  props,
) => {
  return (
    <Autocomplete
      value={props.value}
      onChange={(_, v) => props.onChange(v)}
      options={props.mode === "weapon" ? WEAPONS : UNITS}
      // -------
      filterSelectedOptions
      getOptionLabel={(option) => option.name}
      groupBy={(option) => `${option.rarity}*`}
      filterOptions={filterOptions}
      renderOption={renderOption}
      renderInput={(params) => (
        <TextField
          required
          {...params}
          label={props.label}
          variant="filled"
          placeholder="not selected"
        />
      )}
    />
  );
};

export default EquipmentSelect;
