import { FC } from "react";
import { Box, Grid, Stack, Tooltip, Typography } from "@mui/material";
import { Info } from "@mui/icons-material";
import {
  getAdditiveStats,
  expandAilmentResShorthand,
  makeStat,
  getMulStatsDisplayAsAdd,
  expandPotShorthand,
  expandPPGainShorthand,
  Stat,
  StatPayload,
  StatTypes,
} from "../../../assets/stats";
import { parseStatToDisplay, tallyStats } from "../../../utility";

interface StatsListItemProps {
  stat: Stat;
}
const StatsListItem: FC<StatsListItemProps> = (props) => {
  return (
    <Box>
      <Grid container>
        <Grid item md={6}>
          <Typography>{props.stat.stat_type}</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography>{props.stat.amount} </Typography>
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
    let template: { [key in StatTypes]?: number } = {};

    for (const stat of payload.stats) {
      const { stat_type, amount } = stat;
      if (template[stat_type] === undefined) {
        // TODO: use lookup table to reduce
        //  if-else clutter
        if (stat_type === StatTypes.POT) {
          expandPotShorthand.forEach((off_type) => {
            template[off_type] = amount;
          });
        } else if (stat_type === StatTypes.PP_GAIN) {
          expandPPGainShorthand.forEach((rec_type) => {
            template[rec_type] = amount;
          });
        } else if (stat_type === StatTypes.AILMENT_RES) {
          expandAilmentResShorthand.forEach((res_type) => {
            template[res_type] = amount;
          });
        } else {
          template[stat_type] = amount;
        }
      } else {
        if (stat_type === StatTypes.POT) {
          expandPotShorthand.forEach((off_type) => {
            template[off_type]! *= amount;
          });
        } else if (stat_type === StatTypes.PP_GAIN) {
          expandPPGainShorthand.forEach((rec_type) => {
            template[rec_type]! *= amount;
          });
        } else if (stat_type === StatTypes.AILMENT_RES) {
          expandAilmentResShorthand.forEach((res_type) => {
            template[res_type]! *= amount;
          });
        } else {
          if (getMulStatsDisplayAsAdd.includes(stat_type)) {
            template[stat_type]! += amount - 1;
          } else if (getAdditiveStats.includes(stat_type)) {
            template[stat_type]! += amount;
          } else {
            template[stat_type]! *= amount;
          }
        }
      }
    }

    for (const con of payload.conditionals) {
      conditions.push(con.condition);
      for (const stat of con.stats) {
        const { stat_type, amount } = stat;
        if (template[stat_type] === undefined) {
          if (stat_type === StatTypes.POT) {
            expandPotShorthand.forEach((off_type) => {
              template[off_type] = amount;
            });
          } else if (stat_type === StatTypes.PP_GAIN) {
            expandPPGainShorthand.forEach((rec_type) => {
              template[rec_type] = amount;
            });
          } else if (stat_type === StatTypes.AILMENT_RES) {
            expandAilmentResShorthand.forEach((res_type) => {
              template[res_type] = amount;
            });
          } else {
            template[stat_type] = amount;
          }
        } else {
          if (stat_type === StatTypes.POT) {
            expandPotShorthand.forEach((off_type) => {
              template[off_type]! += amount;
            });
          } else if (stat_type === StatTypes.PP_GAIN) {
            expandPPGainShorthand.forEach((rec_type) => {
              template[rec_type]! += amount;
            });
          } else if (stat_type === StatTypes.AILMENT_RES) {
            expandAilmentResShorthand.forEach((res_type) => {
              template[res_type]! += amount;
            });
          } else {
            if (getMulStatsDisplayAsAdd.includes(stat_type)) {
              template[stat_type]! += amount - 1;
            } else {
              template[stat_type]! += amount;
            }
          }
        }
      }
    }

    let payload_stats: Stat[] = [];
    for (const key of Object.keys(template)) {
      payload_stats.push(
        makeStat(key as StatTypes, template[key as StatTypes]!),
      );
    }

    stats.push(...payload_stats);
  }
  const tallied = tallyStats(stats);

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
        {tallied.map((stat) => (
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
