import React from "react";
import { Typography, Grid, Button, CssBaseline } from "@material-ui/core";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class Home extends React.PureComponent {
  render() {
    return (
      <div className="hero">
        <CssBaseline />
        <Header />

        <Grid id="homepage">
          <Typography className="large-text" variant="h3">
            Engaging every Student to create a{" "}
            <span className="text--purple cursive-text-bold">
              memorable convocation experience.
            </span>
          </Typography>{" "}
          <br />
          <Typography variant="h6" color="inherit">
            Lets fill our convocation experience with things that matter
          </Typography>{" "}
          <br />
          <Link to={"/make-suggestion"}>
            <Button
              variant="contained"
              className="button-purple"
              size="large"
              style={{ padding: 15 }}
            >
              <span role="img" aria-label="graduation" />
              Make Suggestions
            </Button>
          </Link>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default Home;
