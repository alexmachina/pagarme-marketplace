import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import ProductCard from '../../components/ProductCard';
import data from "../../products.json";

const { products } = data;

const Home = () => {
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
      <Grid item xs={12}>
        <Container>
          <Grid container direction="row" spacing={3}>
            {products.map(product => (
              <Grid item xs={12} sm={4}>
              <ProductCard title={product.title} media={product.media} price={product.price} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Home;
