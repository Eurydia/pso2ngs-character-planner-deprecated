import { FC } from "react";
import { Box, Grid, Stack, Tooltip, Typography } from "@mui/material";
import { Info } from "@mui/icons-material";
import { AugmentData } from "../../../assets/augments";
import { FixaData } from "../../../assets/fixas";
import { Stat, StatTypes } from "../../../assets/stats";
import { getUnitDefense, UnitData } from "../../../assets/units";
import { getPotentialStats } from "../../../assets/weapon-potentials";
import { getWeaponAttack, WeaponData } from "../../../assets/weapons";
import {
  stackStats,
  parseStatToDisplay,
  tallyStats,
} from "../../../utility";

interface StatsListItemProps {
  stat_type: StatTypes;
  amount: string;
}
const StatsListItem: FC<StatsListItemProps> = (props) => {
  return (
    <Box>
      <Grid container>
        <Grid item md={6}>
          <Typography>{props.stat_type}</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography>{props.amount} </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

interface StatsListProps {
  weapon: WeaponData | null;
  potential_level: number;
  unit: UnitData | null;
  fixa: FixaData | null;
  enhancement: number;
  augments: (AugmentData | null)[];
}
const StatsList: FC<StatsListProps> = (props) => {
  let stats: Stat[] = [];
  let conditionals: string[] = [];

  if (props.weapon !== null) {
    const w_atk = getWeaponAttack(props.weapon, props.enhancement);

    const w_pot = getPotentialStats(
      props.weapon.series,
      props.potential_level,
    );

    let w_pot_con_stats: Stat[] = [];
    w_pot.conditionals.forEach((con) => {
      conditionals.push(con.condition);
      w_pot_con_stats.push(...con.stats);
    });

    stats.push(
      ...stackStats(
        [w_atk, ...props.weapon.stats, ...w_pot.stats],
        w_pot_con_stats,
      ),
    );
  }

  if (props.unit !== null) {
    const u_def = getUnitDefense(props.unit, props.enhancement);
    stats.push(...[u_def, ...props.unit.stats]);
  }

  if (props.fixa !== null) {
    stats.push(...props.fixa.stats);
  }

  props.augments.forEach((aug) => {
    if (aug !== null) {
      let aug_con_stats: Stat[] = [];
      aug.conditionals.forEach((con) => {
        conditionals.push(con.condition);
        aug_con_stats.push(...con.stats);
      });
      stats.push(...stackStats(aug.stats, aug_con_stats));
    }
  });
  return (
    <Box>
      <Box sx={{ justifyContent: "flex-end", display: "flex" }}>
        {conditionals.length > 0 && (
          <Tooltip
            placement="left-start"
            title={
              <Box>
                <Typography>Assumes that your character:</Typography>
                <Stack paddingLeft={2} component="ul">
                  {conditionals.map((con, index) => (
                    <Typography
                      key={`${con}-${index}`}
                      component="li"
                    >
                      {con}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            }
          >
            <Info color="info" />
          </Tooltip>
        )}
      </Box>
      <Stack sx={{ height: 380, overflowY: "auto" }} spacing={2}>
        {tallyStats(stats).map((stat) => (
          <StatsListItem
            key={stat.stat_type}
            stat_type={stat.stat_type}
            amount={parseStatToDisplay(stat)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default StatsList;
