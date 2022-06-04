import { Grid, Box, Stack, Divider } from "@mui/material";
import { FC, ReactNode } from "react";

interface EquipmentFormLayoutProps {
  equipmentSlot: ReactNode;
  fixaSlot: ReactNode;
  enhancementSlot: ReactNode;
  augmentsSlot: ReactNode;
  potentialSlot?: ReactNode;
}
const EquipmentFormLayout: FC<EquipmentFormLayoutProps> = (props) => {
  return (
    <Box>
      <Stack
        spacing={4}
        divider={<Divider flexItem />}
        justifyContent="space-between"
        sx={{
          height: 400,
        }}
      >
        <Grid container columns={{ xs: 6, sm: 12 }} spacing={2}>
          <Grid item xs={12} sm={6}>
            {props.equipmentSlot}
          </Grid>
          <Grid item xs={12} sm={6}>
            {props.enhancementSlot}
          </Grid>
          <Grid item xs={12} sm={6}>
            {props.fixaSlot}
          </Grid>
          <Grid item xs={12} sm={6}>
            {props.potentialSlot}
          </Grid>
        </Grid>
        {props.augmentsSlot}
      </Stack>
    </Box>
  );
};
export default EquipmentFormLayout;
