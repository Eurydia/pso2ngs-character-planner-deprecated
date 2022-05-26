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
import { Fixa, Stat } from "../types";
import { UNIT_FIXA, WEAPON_FIXA } from "../assets/fixa";
import { matchSorter } from "match-sorter";

const renderOptionStat = (stats: Stat[]) => {
  let parsed_stats: JSX.Element[] = [];
  stats.forEach((stat) => {
    const stat_value = parseStatToDisplay(stat);
    parsed_stats.push(
      <Typography key={stat.stat_type}>
        {`${stat_value} ${stat.stat_type}`}
      </Typography>,
    );
  });
  return parsed_stats;
};

const renderOption = (
  props: HTMLAttributes<HTMLLIElement>,
  option: Fixa,
) => {
  const name = `${option.name} Lv.${option.level}`;
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

const filterOptions = (
  options: Fixa[],
  state: FilterOptionsState<Fixa>,
): Fixa[] => {
  const input_value = state.inputValue.trim().normalize();
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
        keys: ["name", "level"],
      }),
    options,
  );
  return result;
};

interface FixaSelectProps {
  mode: "weapon" | "unit";
  disabled: boolean;
  label?: string;
  value: Fixa | null;
  onChange: (value: Fixa | null) => void;
}
const EquipmentFixaSelect: FC<FixaSelectProps> = (props) => {
  return (
    <Autocomplete
      disabled={props.disabled}
      options={props.mode === "weapon" ? WEAPON_FIXA : UNIT_FIXA}
      value={props.value}
      onChange={(_, v) => props.onChange(v)}
      filterSelectedOptions
      getOptionLabel={(option) => option.name}
      filterOptions={filterOptions}
      renderOption={renderOption}
      renderInput={(params) => (
        <TextField {...params} label="select fixa" variant="filled" />
      )}
    />
  );
};
export default EquipmentFixaSelect;
