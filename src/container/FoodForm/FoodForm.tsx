import {
  ReactNode,
  FC,
  Fragment,
  memo,
  useEffect,
  useState,
} from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { AutoAwesome, Fastfood } from "@mui/icons-material";
import { FoodItem } from "../../assets/food";
import { FOOD_ITEM_MAX } from "../../assets/constants";
import FoodList from "./components/FoodList";
import BuffList from "./components/BuffList";

interface CustomDialogInterface {
  isOpen: boolean;
  onClose: () => void;
  content: ReactNode;
}
const CustomDialog: FC<CustomDialogInterface> = ({
  isOpen,
  onClose,
  content,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      scroll="body"
    >
      <DialogTitle>
        <Stack spacing={1} direction="row" alignItems="center">
          <AutoAwesome color="primary" />
          <Typography
            variant="h6"
            color="primary"
            textTransform="capitalize"
          >
            active buffs
          </Typography>
        </Stack>
      </DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>close</Button>
      </DialogActions>
    </Dialog>
  );
};

interface CustomCardInterface {
  content: ReactNode;
  actions: ReactNode;
}
const CustomCard: FC<CustomCardInterface> = ({
  content,
  actions,
}) => {
  return (
    <Card variant="outlined">
      <CardHeader
        title={
          <Stack spacing={1} direction="row" alignItems="center">
            <Fastfood color="primary" />
            <Typography variant="h6" color="primary">
              Food Buff
            </Typography>
          </Stack>
        }
      />
      <CardContent>{content}</CardContent>
      <CardActions>{actions}</CardActions>
    </Card>
  );
};

interface FoodFormProps {
  getInitValues: () => FoodItem[];
  onChange: (values: FoodItem[]) => void;
}
const FoodForm: FC<FoodFormProps> = memo(
  ({ getInitValues, onChange }) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [items, setItems] = useState(getInitValues);

    useEffect(() => {
      onChange(items.filter((item) => item.amount > 0));
    }, [onChange, items]);

    const openDialog = () => setDialogOpen(true);
    const closeDialog = () => setDialogOpen(false);

    const handleAmountChange = (value: number, item_name: string) => {
      setItems((prev) => {
        let target_index = 0;
        let usable = FOOD_ITEM_MAX;
        prev.forEach(({ name, amount }, index) => {
          if (name === item_name) {
            target_index = index;
            return;
          }
          usable -= amount;
        });

        const amount = value > usable ? usable : value;

        let next: FoodItem[] = [...prev];
        next[target_index] = { ...prev[target_index], amount };
        return next;
      });
    };

    return (
      <Fragment>
        <CustomCard
          content={
            <FoodList items={items} onChange={handleAmountChange} />
          }
          actions={
            <Button
              onClick={openDialog}
              startIcon={<AutoAwesome />}
              variant="contained"
            >
              active buffs
            </Button>
          }
        />
        <CustomDialog
          isOpen={dialogOpen}
          onClose={closeDialog}
          content={
            <BuffList
              items={items.filter((item) => item.amount > 0)}
            />
          }
        />
      </Fragment>
    );
  },
  (prev, next) => {
    return true;
  },
);

export default FoodForm;
