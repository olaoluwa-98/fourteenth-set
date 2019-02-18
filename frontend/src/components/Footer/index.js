import React from "react";
import { Typography, AppBar, withStyles } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";

const styles = {
  bottomBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "#ffffff",
    fontWeight: "bold",
    alignItems: "center",
    paddingBottom: 15
  },

  bottomBarColor: {
    color: "black"
  }
};

class Footer extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.bottomBar}>
        <Typography variant="p" className={classes.bottomBarColor}>
          Built with
          <Favorite style={{ paddingTop: 5, color: "red" }} />
          from{" "}
          <a href="https://twitter.com/CUDevCommunity" styl>
            {" "}
            CDC
          </a>
        </Typography>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Footer);
