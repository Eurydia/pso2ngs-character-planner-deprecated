import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { FC, Fragment } from "react";
import GATE_DATA, { ContentTypes } from "../../assets/bp-gates";

interface BPGateItemProps {
  bpCharacter: number;
  name: string;
  bpRequired: number;
  contentType: (ContentTypes | string)[];
  enemyLevel: number;
}
const BPGateItem: FC<BPGateItemProps> = (props) => {
  const value =
    props.bpCharacter >= props.bpRequired
      ? 100
      : (props.bpCharacter / props.bpRequired) * 100;

  return (
    <Card>
      <CardContent>
        <Typography>
          {`${props.bpCharacter}/${props.bpRequired}`}
        </Typography>
        <LinearProgress variant="determinate" value={value} />
        <Typography
          textTransform="capitalize"
          sx={{ wordBreak: "break-word" }}
        >
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

interface BPGateProps {
  bpCharacter: number;
}
const BPGate: FC<BPGateProps> = (props) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={1} columns={12}>
          {GATE_DATA.map(
            ({ name, bp_required, content_type, enemy_level }) => (
              <Grid item md={4} key={name}>
                <BPGateItem
                  bpCharacter={props.bpCharacter}
                  name={name}
                  bpRequired={bp_required}
                  contentType={content_type}
                  enemyLevel={enemy_level}
                />
              </Grid>
            ),
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};
export default BPGate;
