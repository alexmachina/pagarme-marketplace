import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";

import { Switch, Route } from "react-router-dom";
import Product from "./pages/product";
import Home from "./pages/home";
import Cart from "./pages/cart";

const App = () => {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item xs={12}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Grid>

      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/carrinho/:id">
            <Cart />
          </Route>
          <Route path="/produto/:id">
            <Product />
          </Route>
        </Switch>
      </Container>
    </Grid>
  );
};

export default App;
