import React from 'react';
import Card from '@material-ui/core/CardActions';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: 0,
  },
  card: {
    padding: 0,
  },
  cardContent: {
    padding: 8,
  },
  media: {
    maxWidth: '100%',
  }
});

const ProductCard = ({ media, title, price }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea>
          <Grid container className={classes.cardContent}>
            <Grid item xs={12}>
              <img className={classes.media} src={media} />
            </Grid>
            <Grid item xs={12}>
              <Typography align="center" variant="h6">{title}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography  align="center" variant="h6">{price}</Typography>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Paper>
  );
};

export default ProductCard;
