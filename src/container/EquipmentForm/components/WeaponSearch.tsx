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
  AutocompleteRenderOptionState,
} from "@mui/material";
import { Info } from "@mui/icons-material";
import { matchSorter } from "match-sorter";
import { isStatAddType, StatTypes } from "../../../assets/stats";
import WEAPONS, {
  getWeaponATKAmount,
  WeaponData,
} from "../../../assets/weapons";
import { parseNumberToDisplay } from "../../../utility";

const renderOption = (
  props: HTMLAttributes<HTMLLIElement>,
  option: WeaponData,
  _: AutocompleteRenderOptionState,
  enhancement: number,
) => {
  const atk_amount = getWeaponATKAmount(
    option.base_attack,
    option.rarity,
    enhancement,
  );

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
            <Typography>{`+${atk_amount} ${StatTypes.ATK}`}</Typography>
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
  options: WeaponData[],
  state: FilterOptionsState<WeaponData>,
): WeaponData[] => {
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
interface WeaponSearchProps {
  isRealistic: boolean;
  charLevel: number;
  enhancement: number;
  value: null | WeaponData;
  onChange: (value: null | WeaponData) => void;
}
const WeaponSearch: FC<WeaponSearchProps> = memo(
  (props) => {
    const handleChange = (
      _: SyntheticEvent<Element, Event>,
      value: WeaponData | null,
    ) => {
      props.onChange(value);
    };

    const showInfoIcon = props.value === null && props.isRealistic;
    return (
      <Autocomplete
        value={props.value}
        // -------
        options={WEAPONS}
        onChange={handleChange}
        filterOptions={filterOptions}
        renderOption={(params, option, _) =>
          renderOption(params, option, _, props.enhancement)
        }
        isOptionEqualToValue={(option, value) =>
          option.name === value.name
        }
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

export default WeaponSearch;
