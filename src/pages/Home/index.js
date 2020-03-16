import React, { useState } from "react";
import {
  Container,
  Card,
  Grid,
  Typography,
  Button,
  TextField
} from "@material-ui/core";

import styles from "./style";
import { MovieIcon } from "../../icons";

export default ({ history }) => {
  const [searchText, setSearchText] = useState("");
  const classes = styles();

  const handleSearchTextChange = event => {
    setSearchText(event.target.value);
  };

  const handleCleanTextClick = event => {
    setSearchText("");
  };

  const handleSearchTextClick = event => {
    history.push(`/results?movieName=${searchText}`);
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Typography className={classes.title}>Welcome</Typography>
          <MovieIcon className={classes.movieIcon} />
        </Grid>

        <TextField
          value={searchText}
          placeholder="Buscar"
          onChange={handleSearchTextChange}
          className={classes.texFielSearch}
        />
        <Grid className={classes.buttonsContainer}>
          <Button onClick={handleCleanTextClick} variant="contained">
            Limpiar
          </Button>
          <Button
            className={classes.searchButton}
            onClick={handleSearchTextClick}
            variant="contained"
            color="primary"
            size="large"
          >
            Buscar
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
