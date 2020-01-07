import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";
import MarketplaceAppBar from "common/components/MarketplaceAppBar";
import Product from "./pages/product";
import Home from "./pages/home";
import Cart from "./pages/cart";

const useStyles = makeStyles(theme => ({
  content: {
    marginTop: 24
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <MarketplaceAppBar />
      </Grid>
      <Container>
        <Grid item xs={12} className={classes.content}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/carrinho">
              <Cart />
            </Route>
            <Route path="/produto/:id">
              <Product />
            </Route>
          </Switch>
        </Grid>
      </Container>
    </Grid>
  );
};

export default App;
