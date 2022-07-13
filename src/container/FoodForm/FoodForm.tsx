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
import { matchSorter } from "match-sorter";
import FOOD, { FoodItem } from "../../assets/food";
import { FOOD_ITEM_MAX } from "../../stores";
import FoodList from "./components/FoodList";
import BuffList from "./components/BuffList";
import FilterTextField from "./components/FilterTextField";

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

const filterItems = (
  filter_string: string,
  food_items: FoodItem[],
): FoodItem[] => {
  const terms = filter_string
    .split(" ")
    .map((term) => term.trim())
    .filter((term) => Boolean(term));

  if (terms.length === 0) {
    return food_items.filter((item) => item.amount > 0);
  }

  const result = terms.reduceRight(
    (res, term) =>
      matchSorter(res, term, {
        keys: [
          (item) => item.name,
          (item) => item.attribute,
          (item) => item.category,
        ],
      }),
    food_items,
  );
  return result;
};

interface FoodFormProps {
  getInitValues: () => FoodItem[];
  onChange: (values: FoodItem[]) => void;
}
const FoodForm: FC<FoodFormProps> = memo(
  ({ getInitValues, onChange }) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [filterString, setFilterString] = useState("");
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

    let leftover = FOOD_ITEM_MAX;
    for (const item of items) {
      leftover -= item.amount;
    }

    return (
      <Fragment>
        <CustomCard
          content={
            <Stack spacing={4}>
              <FilterTextField
                value={filterString}
                onChange={setFilterString}
              />
              <FoodList
                isFull={leftover === 0}
                items={filterItems(filterString, items)}
                onChange={handleAmountChange}
              />
            </Stack>
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
