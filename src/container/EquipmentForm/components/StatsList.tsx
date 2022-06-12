import { FC } from "react";
import { Box, Grid, Stack, Tooltip, Typography } from "@mui/material";
import { Info } from "@mui/icons-material";
import {
  getAddStatTypes,
  getExpandedAilmentRes,
  makeStat,
  getAddPercentageStatTypes,
  getExpandedPot,
  getExpandedPPGain,
  Stat,
  StatPayload,
  StatTypes,
  StatShorthands,
} from "../../../assets/stats";
import { parseStatToDisplay, tallyStats } from "../../../utility";

interface StatsListItemProps {
  stat: Stat;
}
const StatsListItem: FC<StatsListItemProps> = (props) => {
  const parsed_amount = parseStatToDisplay(props.stat);
  return (
    <Box>
      <Grid container>
        <Grid item md={6}>
          <Typography>{props.stat.stat_type}</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography>{parsed_amount}</Typography>
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
    let template: { [key in StatTypes]: number } = {
      "BP": 0,
      "HP": 0,
      "PP": 0,
      "ATK": 0,
      "DEF": 0,

      "HP boost": 1,
      "HP recovery boost": 1,
      "active PP recovery": 1,
      "natural PP recovery": 1,
      "PP cost": 1,
      "PB gauge charge rate": 1,

      "DMG": 1,
      "MEL pot": 1,
      "RNG pot": 1,
      "TEC pot": 1,
      "floor pot": 1,
      "crit chance": 1,
      "crit DMG": 1,

      "DMG resist": 1,
      "burn resist": 1,
      "freeze resist": 1,
      "shock resist": 1,
      "blind resist": 1,
      "panic resist": 1,
      "poison resist": 1,
      "physical down resist": 1,
      "ailment duration": 1,
    };

    for (const stat of payload.stats) {
      const { stat_type, amount } = stat;

      if (stat_type === StatShorthands.POT) {
        getExpandedPot().forEach((off_type) => {
          template[off_type]! *= amount;
        });
      } else if (stat_type === StatShorthands.PP_GAIN) {
        getExpandedPPGain().forEach((rec_type) => {
          template[rec_type]! *= amount;
        });
      } else if (stat_type === StatShorthands.AILMENT_RES) {
        getExpandedAilmentRes().forEach((res_type) => {
          template[res_type]! *= amount;
        });
      } else {
        if (getAddPercentageStatTypes().includes(stat_type)) {
          template[stat_type] += amount - 1;
        } else if (getAddStatTypes().includes(stat_type)) {
          template[stat_type] += amount;
        } else {
          template[stat_type] *= amount;
        }
      }

      for (const con of payload.conditionals) {
        conditions.push(con.condition);
        for (const stat of con.stats) {
          const { stat_type, amount } = stat;
          if (stat_type === StatShorthands.POT) {
            getExpandedPot().forEach((off_type) => {
              template[off_type]! += amount;
            });
          } else if (stat_type === StatShorthands.PP_GAIN) {
            getExpandedPPGain().forEach((rec_type) => {
              template[rec_type]! += amount;
            });
          } else if (stat_type === StatShorthands.AILMENT_RES) {
            getExpandedAilmentRes().forEach((res_type) => {
              template[res_type]! += amount;
            });
          } else {
            if (getAddPercentageStatTypes().includes(stat_type)) {
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
          <StatsListItem key={stat.stat_type} stat={stat} />
        ))}
      </Stack>
    </Box>
  );
};

export default StatsList;
