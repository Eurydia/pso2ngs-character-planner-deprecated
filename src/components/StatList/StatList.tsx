import { FC, memo, ReactNode, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TypographyProps,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import {
  getStatTemplate,
  isStatAddType,
  makeStat,
  StatPayload,
  StatTypes,
} from "../../assets/stats";
import {
  addStatToTemplate,
  parseNumberToDisplay,
  tallyStats,
} from "../../utility";
import PotMELIcon from "./icons/PotMELIcon";
import PotRNGIcon from "./icons/PotRNGIcon";
import PotTECIcon from "./icons/PotTECIcon";
import AilBurnIcon from "./icons/AilBurnIcon";
import AilFreezeIcon from "./icons/AilFreezeIcon";
import AilShockIcon from "./icons/AilShockIcon";
import AilBlindIcon from "./icons/AilBlindIcon";
import AilPanicIcon from "./icons/AilPanicIcon";
import AilPoisonIcon from "./icons/AilPoisonIcon";
import AilPhyDownIcon from "./icons/AilPhyDownIcon";
import StatBPIcon from "./icons/StatBPIcon";

interface StatItemProps {
  // static
  bold?: boolean;
  // dynamic
  icon?: ReactNode;
  backgroundColor?: string;
  nameSlot: string;
  amountSlot: string | number;
}
const StatItem: FC<StatItemProps> = memo(
  (props) => {
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
          {props.icon}
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
  },
  (prev, next) => {
    if (
      prev.nameSlot !== next.amountSlot ||
      prev.amountSlot !== next.amountSlot ||
      prev.backgroundColor !== next.backgroundColor
    ) {
      return false;
    }
    return true;
  },
);

interface StatListProps {
  payload: StatPayload[];
}
/**
 *
 * @param props
 * @returns
 */
const StatList: FC<StatListProps> = (props) => {
  // const [activeCondition, setActiveCondition] = useState<{
  //   [key: string]: boolean;
  // }>(() => {
  //   let init: { [key: string]: boolean } = {};
  //   for (const payload_data of props.payload) {
  //     for (const conditional of payload_data.conditionals) {
  //       const condition = conditional.condition;
  //       init[condition] = true;
  //     }
  //   }
  //   return init;
  // });

  const icon_lookup: Partial<{ [key in StatTypes]: ReactNode }> = {
    [StatTypes.BP]: <StatBPIcon />,
    //   [StatTypes.HP]: hp_icon,
    //   [StatTypes.PP]: pp_icon,
    //   [StatTypes.ATK]: atk_icon,
    //   [StatTypes.DEF]: def_icon,
    [StatTypes.MEL_POT]: <PotMELIcon />,
    [StatTypes.RNG_POT]: <PotRNGIcon />,
    [StatTypes.TEC_POT]: <PotTECIcon />,
    [StatTypes.BURN_RESIST]: <AilBurnIcon />,
    [StatTypes.FREEZE_RESIST]: <AilFreezeIcon />,
    [StatTypes.SHOCK_RESIST]: <AilShockIcon />,
    [StatTypes.BLIND_RESIST]: <AilBlindIcon />,
    [StatTypes.PANIC_RESIST]: <AilPanicIcon />,
    [StatTypes.POISON_RESIST]: <AilPoisonIcon />,
    [StatTypes.PHYDOWN_RESIST]: <AilPhyDownIcon />,
  };

  let tallied = getStatTemplate();
  for (const payload_data of props.payload) {
    let stats = tallyStats(payload_data.stats);

    for (const conditional of payload_data.conditionals) {
      if (activeCondition[conditional.condition] === true) {
        for (const con_stat of conditional.stats) {
          stats = addStatToTemplate(con_stat, stats);
        }
      }
    }
    for (const key of Object.keys(stats)) {
      tallied = addStatToTemplate(
        makeStat(key as StatTypes, stats[key as StatTypes]),
        tallied,
      );
    }
  }

  const default_lookup = getStatTemplate();
  let index = 0;
  let stat_items: JSX.Element[] = [];
  for (const key of Object.keys(tallied)) {
    const _key = key as StatTypes;
    const value = tallied[_key];
    const default_value = default_lookup[_key];

    if (value === default_value) {
      continue;
    }

    stat_items.push(
      <StatItem
        key={_key}
        icon={icon_lookup[_key]}
        backgroundColor={index % 2 === 1 ? grey[100] : undefined}
        nameSlot={_key}
        amountSlot={parseNumberToDisplay(value, isStatAddType(_key))}
      />,
    );
    index++;
  }

  return (
    <Box>
      <StatItem
        bold
        backgroundColor={grey["300"]}
        nameSlot="Stat"
        amountSlot="Amount"
      />
      {stat_items}
    </Box>
  );
};

export default StatList;
