import { FC, Fragment } from "react";
import { Divider, Grid, Stack, Typography, Box } from "@mui/material";
import { FoodAttribute, FoodBuff } from "../../../types";
import { parseStatToDisplay } from "../../../utility";

interface BuffListItemProps {
  name: string;
  origin: string;
  level: number | string;
  amount: string;
}
const BuffListItem: FC<BuffListItemProps> = (props) => {
  return (
    <Box>
      <Grid
        container
        columns={10}
        columnSpacing={1}
        sx={{
          padding: 2,
          alignItems: "center",
          textTransform: "capitalize",
        }}
      >
        <Grid item xs={6}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography fontWeight="medium">{props.name}</Typography>
            <Typography>[{props.origin}]</Typography>
            <Typography>({props.level})</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2}>
          <Typography>{props.amount}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

interface BuffListProps {
  items: FoodBuff[];
}
const BuffList: FC<BuffListProps> = (props) => {
  return (
    <Box>
      <Stack divider={<Divider flexItem />}>
        {/* {props.items.length > 0 ? (
          props.items.map((item) => {
            let amount = "";
            if (item.buff_origin === FoodAttribute.CRISPY) {
              amount = parseStatToDisplay(
                item.conditionals[0].stats[0],
              );
            } else {
              amount = parseStatToDisplay(item.stats[0]);
            }
            return (
              <BuffListItem
                key={item.buff_name}
                name={item.buff_name}
                level={item.buff_level}
                origin={item.buff_origin.toLowerCase()}
                amount={amount}
              />
            );
          }) ) */}
        <Typography fontSize="large">
          ...nothing to see here🐬...
        </Typography>
      </Stack>
    </Box>
  );
};
export default BuffList;
