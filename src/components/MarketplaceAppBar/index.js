import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import UnstyledLink from "../UnstyledLink";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { productsInCartCountSelector } from "./selectors";

const useStyles = makeStyles(theme => ({
  menuButton: {
    flexGrow: 1
  }
}));

const MarketplaceAppBar = ({ productsInCartCount }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.menuButton}>
          <IconButton color="inherit" edge="start">
            <MenuIcon />
          </IconButton>
        </div>

        <UnstyledLink to="/carrinho">
          <IconButton
            aria-label="show 4 new mails"
            color="inherit"
            className={classes.cartWidget}
          >
            <Badge badgeContent={productsInCartCount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </UnstyledLink>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  productsInCartCount: productsInCartCountSelector(state)
});

const ConnectedMarketplaceAppBar = connect(mapStateToProps)(MarketplaceAppBar);
export default ConnectedMarketplaceAppBar;
