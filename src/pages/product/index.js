import React from "react";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import addProductToCartAction from "../../store/actions/addProductToCart";
import data from "../../products.json";

const useStyles = makeStyles({
  root: {
    paddingLeft: 8
  },
  image: {
    maxWidth: "100%"
  },
  buyButton: {
    width: "100%"
  }
});

const ProductPage = ({ addProductToCart }) => {
  const classes = useStyles();
  const { id } = useParams();
  const product = data.products.find(product => product.id === id);
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Grid container>
              <Grid item xs={12}>
                <img
                  alt={product.title}
                  src={product.media}
                  className={classes.image}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* Product details and buy button */}
          <Grid item xs={12} sm={6}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h4">{product.title}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">{product.price}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  className={classes.buyButton}
                  endIcon={<AddShoppingCartIcon />}
                  variant="contained"
                  onClick={() => addProductToCart(product)}
                >
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

const mapDispatchToProps = dispatch => ({
  addProductToCart: product => dispatch(addProductToCartAction(product))
});

const mapStateToProps = undefined;

const Connected = connect(mapStateToProps, mapDispatchToProps)(ProductPage);

export default Connected;
