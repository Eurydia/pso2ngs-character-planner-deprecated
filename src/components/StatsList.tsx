import { FC } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { StatTypes, getStatTemplate } from "../assets/stats";
interface StatItemProps {
  name: string;
  amount: string | number;
}
const StatItem: FC<StatItemProps> = (props) => {
  return (
    <Grid container>
      <Grid item md>
        <Typography>{props.name}</Typography>
      </Grid>
      <Grid item md>
        <Typography>{props.amount}</Typography>
      </Grid>
    </Grid>
  );
};
interface BasicStatsProps {
  bp: string | number;
  hp: string | number;
  pp: string | number;
  attack: string | number;
  defense: string | number;
}
const BasicStats: FC<BasicStatsProps> = (props) => {
  return (
    <Grid
      container
      padding={2}
      sx={{
        textTransform: "capitalize",
      }}
    >
      <Grid item md={6}></Grid>
    </Grid>
  );
};

type StatsListProps = {
  [key in StatTypes]: string | number;
};
const StatsList: FC<StatsListProps> = (props) => {
  const template = getStatTemplate();

  return (
    <Box>
      <Stack spacing={2}>
        <BasicStats />
      </Stack>
    </Box>
  );
};

export default StatsList;
