import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import QuantityWidget from "./QuantityWidget";

const useStyles = makeStyles(theme => ({
  image: {
    maxWidth: "100%"
  },
  quantityWidget: {
    marginTop: theme.spacing(4)
  }
}));

const CartItem = ({ title }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <img
              alt="Forza"
              className={classes.image}
              src="/forza-horizon-3.jpg"
            />
          </Grid>
          <Grid item xs={7}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="subtitle1">{title}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="title1">R$12,00</Typography>
              </Grid>
              <Grid item xs={12} className={classes.quantityWidget}></Grid>
              <QuantityWidget count={3} total="R$46,00" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CartItem;
