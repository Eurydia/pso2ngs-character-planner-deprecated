import React, { FC, Fragment, HTMLAttributes } from "react";
import {
  Autocomplete,
  Stack,
  Box,
  TextField,
  Typography,
  Grid,
  FilterOptionsState,
} from "@mui/material";
import { AUGMENTS } from "../assets/augments";
import { convertToRoman, parseStatToDisplay } from "../utility";
import { Augment, Conditional, Stat } from "../types";
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

const renderOptionConditionals = (conditionals: Conditional[]) => {
  let parsed_conditionals: JSX.Element[] = [];
  for (const conditional of conditionals) {
    const stats = renderOptionStat(conditional.stats);
    parsed_conditionals.push(
      <Fragment key={conditional.condition}>
        <Typography>{conditional.condition}</Typography>
        <Stack paddingLeft={1.5}>{stats}</Stack>
      </Fragment>,
    );
  }
  return parsed_conditionals;
};

const renderOption = (
  props: HTMLAttributes<HTMLLIElement>,
  option: Augment,
  showStats: boolean,
) => {
  const roman_lvl = convertToRoman(option.level);
  const name = `${option.name} ${roman_lvl}`;
  const stats = renderOptionStat(option.stats);
  const conditional_stats = renderOptionConditionals(
    option.conditionals,
  );

  return (
    <Box component="li" {...props}>
      <Stack>
        <Typography>{name}</Typography>
        {showStats && (
          <Stack paddingLeft={1}>
            {stats}
            {conditional_stats}
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

const filterOptions = (
  options: Augment[],
  state: FilterOptionsState<Augment>,
) => {
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
        keys: ["name", "level", "group"],
      }),
    options,
  );
  return result;
};

interface CustomAutocompleteProps {
  showStats: boolean;
  disabled: boolean;
  label: string;
  value: Augment | null;
  onChange: (value: Augment | null) => void;
}
const CustomAutocomplete: FC<CustomAutocompleteProps> = (props) => {
  return (
    <Autocomplete
      disabled={props.disabled}
      value={props.value}
      onChange={(_, value) => props.onChange(value)}
      // -------------
      filterSelectedOptions
      options={AUGMENTS}
      getOptionLabel={(option) =>
        `${option.name} ${convertToRoman(option.level)}`
      }
      filterOptions={filterOptions}
      groupBy={(option) => option.group}
      renderOption={(li_props, option) =>
        renderOption(li_props, option, props.showStats)
      }
      renderInput={(params) => (
        <TextField {...params} label={props.label} variant="filled" />
      )}
    />
  );
};

interface AugmentSelectGroupProps {
  disableAll: boolean;
  showStats: boolean;
  equipmentLevel: number;
  values: (Augment | null)[];
  onChange: (value: Augment | null, index: number) => void;
}
const AugmentSelectGroup: FC<AugmentSelectGroupProps> = (props) => {
  return (
    <Box>
      <Grid container columns={2} columnSpacing={1} rowSpacing={1}>
        {props.values.map((value, i) => {
          const name = `augment #${i + 1}`;
          return (
            <Grid item xs={2} sm={1} key={name}>
              <CustomAutocomplete
                disabled={
                  (i !== 0 && props.equipmentLevel < (i + 1) * 10) ||
                  props.disableAll
                }
                showStats={props.showStats}
                label={name}
                value={value}
                onChange={(value) => props.onChange(value, i)}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default AugmentSelectGroup;
