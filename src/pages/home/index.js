import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ProductCard from "common/components/ProductCard";
import data from "../../products.json";

const { products } = data;

const Home = () => {
  return (
    <Grid container direction="row" spacing={3}>
      {products.map(product => (
        <Grid item xs={12} sm={4}>
          <Link to={`/produto/${product.id}`}>
            <ProductCard
              title={product.title}
              media={product.media}
              price={product.price}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
