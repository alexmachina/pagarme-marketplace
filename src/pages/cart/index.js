import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CartItem from "./CartItem";

const useStyles = makeStyles(theme => ({
  image: {
    maxWidth: "100%"
  },
  quantityWidget: {
    marginTop: theme.spacing(2)
  }
}));

const CartPage = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <CartItem />
      </Grid>
    </Grid>
  );
};

export default CartPage;
