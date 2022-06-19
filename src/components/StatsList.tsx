import { FC } from "react";
import {
  Box,
  Grid,
  Typography,
  TypographyProps,
} from "@mui/material";
import {
  isStatAddType,
  StatTemplate,
  StatTypes,
} from "../assets/stats";
import { parseNumberToDisplay } from "../utility";
import mel_pot_icon from "../assets/images/stats/mel-pot-icon.png";
import rng_pot_icon from "../assets/images/stats/rng-pot-icon.png";
import tec_pot_icon from "../assets/images/stats/tec-pot-icon.png";
import burn_ail_icon from "../assets/images/stats/burn-ail-icon.png";
import freeze_ail_icon from "../assets/images/stats/freeze-ail-icon.png";
import shock_ail_icon from "../assets/images/stats/shock-ail-icon.png";
import blind_ail_icon from "../assets/images/stats/blind-ail-icon.png";
import panic_ail_icon from "../assets/images/stats/panic-ail-icon.png";
import poison_ail_icon from "../assets/images/stats/poison-ail-icon.png";
import phydown_ail_icon from "../assets/images/stats/phydown-ail-icon.png";
import { grey } from "@mui/material/colors";

interface StatItemProps {
  bold?: boolean;
  iconSrc?: string;
  backgroundColor?: string;
  nameSlot: string;
  amountSlot: string | number;
}
const StatItem: FC<StatItemProps> = (props) => {
  const typo_sx: TypographyProps = {
    fontWeight: props.bold ? "500" : undefined,
  };
  return (
    <Grid
      container
      paddingX={2}
      paddingY={1}
      alignItems="flex-end"
      textTransform="capitalize"
      sx={{ backgroundColor: props.backgroundColor }}
    >
      <Grid item md={1}>
        {props.iconSrc && (
          <img
            src={props.iconSrc}
            alt={`icon for ${props.nameSlot}.`}
            width={20}
            height={20}
          />
        )}
      </Grid>
      <Grid container item md alignItems="flex-end">
        <Grid item md={8}>
          <Typography {...typo_sx}>{props.nameSlot}</Typography>
        </Grid>
        <Grid item md={4}>
          <Typography {...typo_sx}>{props.amountSlot}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

type StatsListProps = {
  // [key in StatTypes]: string | number;
  stats: StatTemplate;
};
const StatsList: FC<StatsListProps> = (props) => {
  const icon_lookup: Partial<{ [key in StatTypes]: string }> = {
    [StatTypes.MEL_POT]: mel_pot_icon,
    [StatTypes.RNG_POT]: rng_pot_icon,
    [StatTypes.TEC_POT]: tec_pot_icon,
    [StatTypes.BURN_RESIST]: burn_ail_icon,
    [StatTypes.FREEZE_RESIST]: freeze_ail_icon,
    [StatTypes.SHOCK_RESIST]: shock_ail_icon,
    [StatTypes.BLIND_RESIST]: blind_ail_icon,
    [StatTypes.PANIC_RESIST]: panic_ail_icon,
    [StatTypes.POISON_RESIST]: poison_ail_icon,
    [StatTypes.PHYDOWN_RESIST]: phydown_ail_icon,
  };
  // const basic_stats: StatTypes[] = [
  //   StatTypes.BP,
  //   StatTypes.HP,
  //   StatTypes.PP,
  //   StatTypes.ATK,
  //   StatTypes.DEF,
  //   StatTypes.MEL_POT,
  //   StatTypes.RNG_POT,
  //   StatTypes.TEC_POT,
  //   StatTypes.FLOOR_POT,
  //   StatTypes.BURN_RESIST,
  //   StatTypes.FREEZE_RESIST,
  //   StatTypes.SHOCK_RESIST,
  //   StatTypes.BLIND_RESIST,
  //   StatTypes.PANIC_RESIST,
  //   StatTypes.POISON_RESIST,
  //   StatTypes.PHYDOWN_RESIST,
  // ];

  // let basic_stat_elements: JSX.Element[] = [];
  // for (let i = 0; i < basic_stats.length; i++) {
  //   const stat = basic_stats[i];
  //   const value = props.stats[stat];
  //   basic_stat_elements.push(
  //     <StatItem
  //       key={stat}
  //       iconSrc={icon_lookup[stat]}
  //       backgroundColor={i % 2 === 1 ? grey[100] : undefined}
  //       nameSlot={stat}
  //       amountSlot={parseNumberToDisplay(value, isStatAddType(stat))}
  //     />,
  //   );
  // }

  return (
    <Box>
      <StatItem
        bold
        backgroundColor={grey["300"]}
        nameSlot="Stat"
        amountSlot="Amount"
      />
      {Object.keys(props.stats).map((key, index) => {
        const _key = key as StatTypes;
        const value = props.stats[_key];
        return (
          <StatItem
            key={_key}
            iconSrc={icon_lookup[_key]}
            backgroundColor={index % 2 === 1 ? grey[100] : undefined}
            nameSlot={_key}
            amountSlot={parseNumberToDisplay(
              value,
              isStatAddType(_key),
            )}
          />
        );
      })}
    </Box>
  );
};

export default StatsList;
