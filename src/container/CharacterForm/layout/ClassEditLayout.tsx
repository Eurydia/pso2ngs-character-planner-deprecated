import { Box, Grid } from "@mui/material";
import { FC, Fragment, ReactNode } from "react";

interface ClassEditLayoutProp {
  charLevelSelect?: ReactNode;
  classSearchSlot: ReactNode;
  spSelectSlot: ReactNode;
}
const ClassEditLayout: FC<ClassEditLayoutProp> = (props) => {
  return (
    <Box>
      <Grid container spacing={2}>
        {props.charLevelSelect && (
          <Fragment>
            <Grid item md={6}>
              {props.charLevelSelect}
            </Grid>
            <Grid item md={6} />
          </Fragment>
        )}
        <Grid item md={6}>
          {props.classSearchSlot}
        </Grid>
        <Grid item md={6}>
          {props.spSelectSlot}
        </Grid>
      </Grid>
    </Box>
  );
};
export default ClassEditLayout;
