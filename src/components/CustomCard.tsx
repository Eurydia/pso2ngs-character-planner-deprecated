import { FC, Fragment, ReactNode, useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Fade,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface CustomCardHeaderProps {
  title: string;
  titleIcon: ReactNode;
}
const CustomCardHeader: FC<CustomCardHeaderProps> = (props) => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      color={theme.palette.primary.main}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        {props.titleIcon}
        <Typography
          fontSize={theme.typography.h4.fontSize}
          fontWeight="medium"
        >
          {props.title}
        </Typography>
      </Stack>
    </Stack>
  );
};

interface CustomCardProps {
  frontTitle: string;
  frontTitleIcon: ReactNode;
  frontContent: ReactNode;

  backTitle: string;
  backTitleIcon: ReactNode;
  backContent: ReactNode | ReactNode[];
}
const CustomCard: FC<CustomCardProps> = (props) => {
  const theme = useTheme();

  const [showFront, setShowFront] = useState(true);
  const flipSide = () => setShowFront(!showFront);

  return (
    <Card variant="outlined">
      {showFront && (
        <Fragment>
          <Fade in timeout={{ enter: 450 }}>
            <CardHeader
              title={
                <CustomCardHeader
                  title={props.frontTitle}
                  titleIcon={props.frontTitleIcon}
                />
              }
            />
          </Fade>
          <Fade in timeout={{ enter: 1000 }}>
            <CardContent>{props.frontContent}</CardContent>
          </Fade>
        </Fragment>
      )}
      {!showFront && (
        <Fragment>
          <Fade in timeout={{ enter: 450 }}>
            <CardHeader
              title={
                <CustomCardHeader
                  title={props.backTitle}
                  titleIcon={props.backTitleIcon}
                />
              }
            />
          </Fade>
          <Fade in timeout={{ enter: 1000 }}>
            <CardContent>{props.backContent}</CardContent>
          </Fade>
        </Fragment>
      )}
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          startIcon={
            showFront ? props.backTitleIcon : props.frontTitleIcon
          }
          onClick={flipSide}
          variant="contained"
        >
          flip
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
