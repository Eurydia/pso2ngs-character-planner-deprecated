import {
  Card,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { Weapon, Unit, Fixa, Augment, AugmentGroups } from "../types";
import AugmentSelectGroup from "../components/AugmentSelectGroup";
import EquipmentSelect from "../components/EquipmentSelect";
import EquipmentFixaSelect from "../components/EquipmentFixaSelect";

const augmentsDoConflict = (
  next: Augment,
  prev: Augment,
): boolean => {
  const same_name = next.name === prev.name;
  const conflict_group = next.conflict.includes(prev.group);
  const mastery_exception =
    next.group === AugmentGroups.FUSED && prev.name === "mastery";

  return same_name || (conflict_group && !mastery_exception);
};

const constrainAugments = (
  new_augment: Augment | null,
  index: number,
  prev_augments: (Augment | null)[],
): (Augment | null)[] => {
  let next = [...prev_augments];
  next[index] = new_augment;
  if (new_augment === null) {
    return next;
  }

  next.forEach((prev_augment, i) => {
    if (i !== index && prev_augment) {
      if (augmentsDoConflict(new_augment, prev_augment)) {
        next[i] = null;
      }
    }
  });
  return next;
};

const validateEqLevelSelection = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => {
  const MIN_LEVEL = 0;
  const MAX_LEVEL = 50;

  const value = event.target.value;
  if (!value) {
    return MIN_LEVEL;
  }
  let new_level = parseInt(value);

  if (new_level < MIN_LEVEL) {
    new_level = MIN_LEVEL;
  } else if (new_level > MAX_LEVEL) {
    new_level = MAX_LEVEL;
  }
  return new_level;
};

const validatePotentialLevelSelection = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => {
  const MIN_LEVEL = 0;
  const MAX_LEVEL = 4;

  const value = event.target.value;
  if (!value) {
    return MIN_LEVEL;
  }
  let new_level = parseInt(value);

  if (new_level < MIN_LEVEL) {
    new_level = MIN_LEVEL;
  } else if (new_level > MAX_LEVEL) {
    new_level = MAX_LEVEL;
  }
  return new_level;
};

interface EquipmentFormGroupProps {
  mode: "weapon" | "unit";
  label: string;
}
const EquipmentFormGroup: FC<EquipmentFormGroupProps> = (props) => {
  const [equipemnt, setEquipment] = useState<null | Weapon | Unit>(
    null,
  );
  const [potentialLevel, setPotentialLevel] = useState(0);
  const [eqLevel, setEqLevel] = useState(0);
  const [eqFixa, setEqFixa] = useState<null | Fixa>(null);
  const [augments, setAugments] = useState<(null | Augment)[]>([
    null,
    null,
    null,
    null,
    null,
  ]);

  const handleEqLevelChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEqLevel(validateEqLevelSelection(event));
  };

  const handleAugmentChange = (
    new_augment: Augment | null,
    index: number,
  ) => {
    setAugments((prev) =>
      constrainAugments(new_augment, index, prev),
    );
  };

  const handlePotentialLevelChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPotentialLevel(validatePotentialLevelSelection(event));
  };

  const disabled = equipemnt === null;

  return (
    <Paper variant="outlined">
      <Stack
        direction="column"
        spacing={2}
        padding={2}
        divider={<Divider />}
      >
        <Grid container columns={10} rowSpacing={1} columnSpacing={1}>
          <Grid item xs={7}>
            <EquipmentSelect
              mode={props.mode}
              label={props.label}
              value={equipemnt}
              onChange={setEquipment}
            />
          </Grid>
          <Grid item xs={3}>
            {props.mode === "weapon" && (
              <TextField
                disabled={disabled}
                value={potentialLevel}
                onChange={handlePotentialLevelChange}
                label="potential level"
                type="number"
                variant="filled"
              />
            )}
          </Grid>
          <Grid item xs={3}>
            <TextField
              disabled={disabled}
              value={eqLevel}
              onChange={handleEqLevelChange}
              label="enchancement level"
              type="number"
              variant="filled"
            />
          </Grid>
          <Grid item xs={7}>
            <EquipmentFixaSelect
              disabled={disabled}
              mode={props.mode}
              value={eqFixa}
              onChange={setEqFixa}
            />
          </Grid>
        </Grid>
        <AugmentSelectGroup
          disableAll={disabled}
          equipmentLevel={eqLevel}
          showStats={false}
          values={augments}
          onChange={handleAugmentChange}
        />
      </Stack>
    </Paper>
  );
};

export default EquipmentFormGroup;
