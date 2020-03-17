import React from "react";
import { Card, Grid, Button, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import style from "./style";

const MovieResult = ({ Title, Year, Type, imdbID, Poster, history }) => {
  const classes = style();

  const handleSeeMovieClick = () => {
    console.log(imdbID);
    history.push(`/movie/${imdbID}`);
  };

  return (
    <Card className={classes.cardContainer}>
      <Grid container>
        <Grid item>
          <img src={Poster} alt={Title} className={classes.poster} />
        </Grid>
        <Grid item className={classes.titlesContainer}>
          <Typography>{Title}</Typography>
          <Typography>{Year}</Typography>
          <Typography>{Type}</Typography>
          <Button
            onClick={handleSeeMovieClick}
            color="primary"
            variant="contained"
          >
            ver más
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default withRouter(MovieResult);
