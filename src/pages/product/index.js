import React from "react";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import data from "../../products.json";

const useStyles = makeStyles({
  root: {
    paddingLeft: 8
  },
  image: {
    maxWidth: "100%"
  }
});
const ProductPage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const product = data.products.find(product => product.id === id);
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="subtitle1">{product.title}</Typography>
              </Grid>
              <Grid item xs={12}>
                <img src={product.media} className={classes.image} />
              </Grid>
            </Grid>
          </Grid>
          {/* Product details and buy button */}
          <Grid item xs={6}>
            <Grid container direction="column" justify="center">
              <Grid item xs={12}>
                <Typography variant="subtitle2">{product.price}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Button endIcon={<AddShoppingCartIcon />} variant="contained">
                  Comprar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductPage;
