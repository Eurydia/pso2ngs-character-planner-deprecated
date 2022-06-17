import { FC } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { StatTypes } from "../assets/stats";
import { parseNumberToDisplay } from "../utility";
import mel_pot_icon from "../assets/images/stats/mel-pot-icon.png";
import rng_pot_icon from "../assets/images/stats/rng-pot-icon.png";
import tec_pot_icon from "../assets/images/stats/tec-pot-icon.png";
import burn_ail_icon from "../assets/images/stats/burn-ail-icon.png";
import freeze_ail_icon from "../assets/images/stats/freeze-ail-icon.png";
import shock_ail_icon from "../assets/images/stats/shock-ail-icon.png";
import blind_ail_icon from "../assets/images/stats/blind-ail-icon.png";
import panic_ail_icon from "../assets/images/stats/panic-ail-icon.png";
import poison_ail_icon from "../assets/images/stats/poison-ail-icon.png";
import phydown_ail_icon from "../assets/images/stats/phydown-ail-icon.png";

interface StatItemProps {
  name: string;
  amount: string | number;
  iconSrc?: string;
}
const StatItem: FC<StatItemProps> = (props) => {
  return (
    <Grid container alignItems="flex-end" textTransform="capitalize">
      <Grid item md={1}>
        {props.iconSrc && (
          <img
            src={props.iconSrc}
            alt={`icon for ${props.name}.`}
            width={20}
            height={20}
          />
        )}
      </Grid>
      <Grid container item md alignItems="flex-end">
        <Grid item md={8}>
          <Typography>{`${props.name}:`}</Typography>
        </Grid>
        <Grid item md={4}>
          <Typography>{props.amount}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

type StatsListProps = {
  // [key in StatTypes]: string | number;
};
const StatsList: FC<StatsListProps> = (props) => {
  return (
    <Box>
      <Grid container spacing={2} textTransform="capitalize">
        <Grid container item spacing={2}>
          <Grid item md={6}>
            <StatItem
              name={StatTypes.BP}
              amount={parseNumberToDisplay(0, true)}
            />
          </Grid>
          <Grid item md={6} />
          <Grid item md={6}>
            <StatItem
              name={StatTypes.HP}
              amount={parseNumberToDisplay(0, true)}
            />
          </Grid>
          <Grid item md={6}>
            <StatItem
              name={StatTypes.PP}
              amount={parseNumberToDisplay(0, true)}
            />
          </Grid>
          <Grid item md={6}>
            <StatItem
              name={StatTypes.ATK}
              amount={parseNumberToDisplay(0, true)}
            />
          </Grid>
          <Grid item md={6}>
            <StatItem
              name={StatTypes.DEF}
              amount={parseNumberToDisplay(0, true)}
            />
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Divider flexItem />
        </Grid>
        <Grid container item spacing={2}>
          <Grid item md={6}>
            <StatItem
              name={StatTypes.MEL_POT}
              amount={parseNumberToDisplay(1, false)}
              iconSrc={mel_pot_icon}
            />
          </Grid>
          <Grid item md={6}>
            <StatItem
              name={StatTypes.RNG_POT}
              amount={parseNumberToDisplay(1, false)}
              iconSrc={rng_pot_icon}
            />
          </Grid>
          <Grid item md={6}>
            <StatItem
              name={StatTypes.TEC_POT}
              amount={parseNumberToDisplay(1, false)}
              iconSrc={tec_pot_icon}
            />
          </Grid>
          <Grid item md={6}>
            <StatItem
              name={StatTypes.FLOOR_POT}
              amount={parseNumberToDisplay(1, false)}
            />
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Divider flexItem />
        </Grid>
        <Grid container item spacing={2}>
          <Grid item md={6}>
            <StatItem
              name={StatTypes.BURN_RESIST}
              amount={parseNumberToDisplay(1, false)}
              iconSrc={burn_ail_icon}
            />
          </Grid>
          <Grid item md={6}>
            <StatItem
              name={StatTypes.FREEZE_RESIST}
              amount={parseNumberToDisplay(1, false)}
              iconSrc={freeze_ail_icon}
            />
          </Grid>
          <Grid item md={6}>
            <StatItem
              name={StatTypes.SHOCK_RESIST}
              amount={parseNumberToDisplay(1, false)}
              iconSrc={shock_ail_icon}
            />
          </Grid>
          <Grid item md={6}>
            <StatItem
              name={StatTypes.BLIND_RESIST}
              amount={parseNumberToDisplay(1, false)}
              iconSrc={blind_ail_icon}
            />
          </Grid>
          <Grid item md={6}>
            <StatItem
              name={StatTypes.PANIC_RESIST}
              amount={parseNumberToDisplay(1, false)}
              iconSrc={panic_ail_icon}
            />
          </Grid>
          <Grid item md={6}>
            <StatItem
              name={StatTypes.POISON_RESIST}
              amount={parseNumberToDisplay(1, false)}
              iconSrc={poison_ail_icon}
            />
          </Grid>
          <Grid item md={6}>
            <StatItem
              name={StatTypes.PHYDOWN_RESIST}
              amount={parseNumberToDisplay(1, false)}
              iconSrc={phydown_ail_icon}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* <Grid item md={12}>
          <Divider flexItem textAlign="center">
            <Typography>advanced stats</Typography>
          </Divider>
        </Grid> */}
      {/* <Grid container item spacing={2}>
          <Grid item md={6}>
            <StatItem
              name={StatTypes.PB_GAUGE_CHARGE_RATE}
              amount={parseNumberToDisplay(1, false)}
            />
          </Grid>
          <Grid item md={6} />
        </Grid>
        <Grid item md={12}>
          <Divider flexItem />
        </Grid>
        <Grid container item spacing={2}>
          <Grid item md={6}>
            <StatItem
              name={StatTypes.DMG_BOOST}
              amount={parseNumberToDisplay(1, false)}
            />
          </Grid>
          <Grid item md={6}>
            <StatItem
              name={StatTypes.DMG_RESIST}
              amount={parseNumberToDisplay(1, false)}
            />
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Divider flexItem />
        </Grid>
        <Grid container item spacing={2}>
          <Grid item md={6}>
            <StatItem
              name={StatTypes.CRIT_CHANCE}
              amount={parseNumberToDisplay(1, false)}
            />
          </Grid>
          <Grid item md={6}>
            <StatItem
              name={StatTypes.CRIT_DMG}
              amount={parseNumberToDisplay(1, false)}
            />
          </Grid>
        </Grid>
        <Grid item md={6}>
          <StatItem
            name={StatTypes.PP_COST}
            amount={parseNumberToDisplay(1, false)}
          />
        </Grid>
        <Grid item md={6} />
        <Grid item md={6}>
          <StatItem
            name={StatTypes.NATURAL_PP_RECOVERY}
            amount={parseNumberToDisplay(1, false)}
          />
        </Grid>
        <Grid item md={6}>
          <StatItem
            name={StatTypes.ACTIVE_PP_RECOVERY}
            amount={parseNumberToDisplay(1, false)}
          />
        </Grid>
      <Grid item md={6}>
        <StatItem
          name={StatTypes.AILMENT_DURATION}
          amount={parseNumberToDisplay(1, false)}
        />
      </Grid> */}
    </Box>
  );
};

export default StatsList;
