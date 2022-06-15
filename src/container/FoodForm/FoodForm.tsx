import {
  ChangeEvent,
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
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  AutoAwesome,
  Fastfood,
  FilterAlt,
} from "@mui/icons-material";
import { matchSorter } from "match-sorter";
import FOOD, { FoodItem } from "../../assets/food";
import { FOOD_ITEM_MAX } from "../../stores";
import FoodList from "./components/FoodList";
import BuffList from "./components/BuffList";
import { sortByAlphabet } from "../../utility";

const filterItems = (
  filter_string: string,
  food_items: FoodItem[],
): FoodItem[] => {
  if (!filter_string) {
    return food_items
      .filter((item) => item.amount > 0)
      .sort((a, b) => sortByAlphabet(a.name, b.name));
  }

  const terms = filter_string
    .split(" ")
    .map((term) => term.trim())
    .filter((term) => Boolean(term));
  if (terms.length === 0) {
    return food_items
      .filter((item) => item.amount > 0)
      .sort((a, b) => sortByAlphabet(a.name, b.name));
  }

  const result = terms
    .reduceRight(
      (res, term) =>
        matchSorter(res, term, {
          keys: [
            (item) => item.name,
            (item) => item.attribute,
            (item) => item.category,
          ],
        }),
      food_items,
    )
    .sort((a, b) => sortByAlphabet(a.name, b.name));
  return result;
};

interface FoodFormProps {
  getInitValues: () => FoodItem[];
  onChange: (values: FoodItem[]) => void;
}
const FoodForm: FC<FoodFormProps> = memo(
  (props) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const openDialog = () => setDialogOpen(true);
    const closeDialog = () => setDialogOpen(false);

    const [filterString, setFilterString] = useState("");
    const [items, setItems] = useState<FoodItem[]>(() => {
      let from_local = props.getInitValues();

      let init: FoodItem[] = [];
      for (const item of FOOD) {
        let amount = 0;
        for (let i = 0; i < from_local.length; i++) {
          if (item.name === from_local[i].name) {
            amount = from_local[i].amount;
            from_local.splice(i, 1);
            break;
          }
        }
        init.push({ ...item, amount });
      }
      return init;
    });
    useEffect(() => {
      props.onChange(items.filter((item) => item.amount > 0));
    }, [props, items]);

    const handleAmountChange = (value: number, item_name: string) => {
      setItems((prev) => {
        let target_index = -1;
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

    const handleFilterStringChange = (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      const value = event.target.value.normalize();
      setFilterString(value);
    };

    let leftover = FOOD_ITEM_MAX;
    for (const item of items) {
      leftover -= item.amount;
    }

    return (
      <Fragment>
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
          <CardContent>
            <Stack spacing={4}>
              <Paper elevation={4}>
                <TextField
                  value={filterString}
                  onChange={handleFilterStringChange}
                  fullWidth
                  variant="outlined"
                  label="Filter Items"
                  InputProps={{
                    startAdornment: <FilterAlt />,
                  }}
                />
              </Paper>
              <FoodList
                isFull={leftover === 0}
                items={filterItems(filterString, items)}
                onChange={handleAmountChange}
              />
            </Stack>
          </CardContent>
          <CardActions>
            <Button
              onClick={openDialog}
              startIcon={<AutoAwesome />}
              variant="contained"
            >
              active buffs
            </Button>
          </CardActions>
        </Card>
        <Dialog
          open={dialogOpen}
          onClose={closeDialog}
          fullWidth
          maxWidth="sm"
          scroll="body"
        >
          <DialogTitle>
            <Stack spacing={1} direction="row" alignItems="center">
              <AutoAwesome color="primary" />
              <Typography variant="h6" color="primary">
                Active Buffs
              </Typography>
            </Stack>
          </DialogTitle>
          <DialogContent>
            <BuffList
              items={items.filter((item) => item.amount > 0)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog}>close</Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  },
  (prev, next) => {
    return true;
  },
);

export default FoodForm;
