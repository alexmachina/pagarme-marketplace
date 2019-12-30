import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  countInput: {
    fontSize: 14,
    marginRight: theme.spacing(1)
  },
  total: {
    marginTop: theme.spacing(1)
  }
}));

const QuantityWidget = ({ count, total }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={8}>
            <TextField
              value={count}
              className={classes.countInput}
              variant="outlined"
              label="Quantidade"
            />
          </Grid>
          <Grid item xs={12} className={classes.total}>
            <Typography variant="h6">{total}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuantityWidget;
