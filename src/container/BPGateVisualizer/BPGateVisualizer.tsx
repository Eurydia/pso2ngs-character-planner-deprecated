import {
  Box,
  Grid,
  LinearProgress,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { FC, Fragment, ReactFragment } from "react";
import BP_GATES, { ContentTypes } from "../../assets/bp-gates";
import bp_gates from "../../assets/bp-gates/data/battledias";

const getBPGates = () => {
  return [...BP_GATES].sort((a, b) => a.bp_required - b.bp_required);
};

interface BPGateItemProps {
  char_bp: number;
  name: string;
  bp_required: number;
  content_type: ContentTypes;
  enemy_level: number;
}
const BPGateItem: FC<BPGateItemProps> = (props) => {
  const marks: { value: number; label: string }[] = [
    { value: 0, label: "0 BP" },
    { value: props.bp_required, label: `${props.bp_required} BP` },
  ];
  return (
    <Box>
      <Stack>
        <LinearProgress
          variant="determinate"
          value={(500 / props.bp_required) * 100}
        />
        <Typography>{props.name}</Typography>
      </Stack>
    </Box>
  );
};

interface BPGateVisualizerProps {
  character_bp: number;
}
const BPGateVisualizer: FC<BPGateVisualizerProps> = (props) => {
  return (
    <Grid container spacing={4} columns={16}>
      {getBPGates().map((gate) => (
        <Grid item md={4} key={gate.name}>
          {/* <BPGateItem char_bp={props.character_bp} {...gate} /> */}
        </Grid>
      ))}
    </Grid>
  );
};
export default BPGateVisualizer;
