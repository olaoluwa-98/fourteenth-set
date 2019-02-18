import React from "react";
import { Typography, CssBaseline, Grid } from "@material-ui/core";
import Header from "../../components/Header";

class LastPage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <div className="center" id="lastpage">
          <Grid justify="center">
            <Typography variant="h4">
              <span className="text--purple large-text">
                Thank you for taking your time to be involved
              </span>{" "}
            </Typography>
            <Typography variant="h5">We appreciate your input</Typography>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default LastPage;
