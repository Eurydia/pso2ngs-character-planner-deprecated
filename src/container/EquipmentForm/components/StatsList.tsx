import { FC } from "react";
import { Box, Grid, Stack, Tooltip, Typography } from "@mui/material";
import { Info } from "@mui/icons-material";
import { AugmentData } from "../../../assets/augments";
import { FixaData } from "../../../assets/fixas";
import { Stat, StatPayload, StatTypes } from "../../../assets/stats";
import { getUnitDefense, UnitData } from "../../../assets/units";
import {
  getWeaponStatPayload,
  WeaponData,
} from "../../../assets/weapons";
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
  payloads: StatPayload[];
}
const StatsList: FC<StatsListProps> = (props) => {
  let stats: Stat[] = [];
  let conditions: string[] = [];

  for (const payload of props.payloads) {
    stats.push(...payload.stats);

    payload.conditionals.forEach(
      ({ condition, stats: con_stats }) => {
        conditions.push(condition);
        stats.push(...con_stats);
      },
    );
  }

  return (
    <Box>
      <Box sx={{ justifyContent: "flex-end", display: "flex" }}>
        {conditions.length > 0 && (
          <Tooltip
            placement="left-start"
            title={
              <Box>
                <Typography>Assumes that your character:</Typography>
                <Stack paddingLeft={2} component="ul">
                  {conditions.map((con, index) => (
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
