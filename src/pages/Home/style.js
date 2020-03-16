import { makeStyles } from "@material-ui/styles";

const centeredStyleObj = {
  display: "flex",
  alignItems: "center",
  justifContent: "center"
};

export default makeStyles({
  container: {
    ...centeredStyleObj,
    height: "100vh",
    flexDirection: "column"
  },
  cardContainer: {
    ...centeredStyleObj,
    flexDirection: "column",
    width: 400,
    height: 200,
    padding: "2rem"
  },
  titleGridContainer: {
    ...centeredStyleObj
  },
  title: {
    fontSize: "4rem"
  },
  texFielSearch: {
    width: "90%"
  },
  searchButton: {
    marginLeft: "0.5rem"
  },
  buttonsContainer: {
    marginTop: "0.5rem"
  },
  movieIcon: {
    fontSize: "4rem"
  }
});
