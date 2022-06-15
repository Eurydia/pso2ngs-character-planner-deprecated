import { FC } from "react";
import {
  Box,
  Divider,
  Grid,
  Modal,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Info } from "@mui/icons-material";
import {
  getAddStatTypes,
  makeStat,
  Stat,
  StatPayload,
  StatTypes,
  getStatTemplate,
} from "../assets/stats";
import {
  parseStatToDisplay,
  tallyStats,
  addStatToTemplate,
} from "../utility";

interface StatsListItemProps {
  stat: Stat;
}
const StatsListItem: FC<StatsListItemProps> = (props) => {
  const parsed_amount = parseStatToDisplay(props.stat);
  return (
    <Box>
      <Grid
        container
        padding={2}
        columns={10}
        sx={{
          alignItems: "center",
          textTransform: "capitalize",
        }}
      >
        <Grid item md={6}>
          <Typography>{props.stat.stat_type}</Typography>
        </Grid>
        <Grid item md={4}>
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
    let template = getStatTemplate();

    for (const stat of payload.stats) {
      template = addStatToTemplate(stat, template);
    }

    for (const con of payload.conditionals) {
      conditions.push(con.condition);
      for (const stat of con.stats) {
        template = addStatToTemplate(stat, template);
      }
    }

    const add_stat_types = getAddStatTypes();
    let payload_stats: Stat[] = [];
    for (const key of Object.keys(template)) {
      const _key = key as StatTypes;
      const amount = template[_key];
      if (
        (add_stat_types.includes(_key) && amount === 0) ||
        amount === 1
      ) {
        continue;
      }
      payload_stats.push(
        makeStat(key as StatTypes, template[key as StatTypes]!),
      );
    }
    stats.push(...payload_stats);
  }
  const tallied = tallyStats(stats);

  return (
    <Box>
      {conditions.length > 0 && (
        <Tooltip
          placement="right-start"
          title={
            <Box>
              <Typography>Assumes that your character:</Typography>
              <Stack paddingLeft={2}>
                {conditions.map((con, index) => (
                  <Typography key={`${con}-${index}`}>
                    {`- ${con}`}
                  </Typography>
                ))}
              </Stack>
            </Box>
          }
        >
          <Info color="info" />
        </Tooltip>
      )}
      <Stack
        divider={<Divider flexItem />}
        sx={{ height: 380, overflowY: "auto" }}
      >
        {tallied.length > 0 ? (
          tallied.map((stat) => (
            <StatsListItem key={stat.stat_type} stat={stat} />
          ))
        ) : (
          <Typography>No stat to display...</Typography>
        )}
      </Stack>
    </Box>
  );
};

export default StatsList;
