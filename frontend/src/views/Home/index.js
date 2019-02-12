import React from "react";
import { Typography, Grid, Button, CssBaseline } from "@material-ui/core";

import Header from "../../components/Header";
class Home extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />

        <Grid spacing={24} id='homepage'>
          <Typography className='large-text' variant='h3' color='white'>
            Engaging every Student to create a <span className='text--purple'>memorable convocation experience.</span>
          </Typography>{" "}
          <br />
          <Typography variant='h6' color='inherit'>
            Lets fill our convocation experience with things that matter
          </Typography>{" "}
          <br />
          <Button variant='contained' className='button-purple' size='large' style={{ padding: 15 }}>
            <span role='img' aria-label='graduation'>
              🎓
            </span>{" "}
            Coming Soon
          </Button>
          <br />
          <br />
          <em>
            <small>Suggestion window open Wednesday 12 pm - Saturday 11:59pm</small>
          </em>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Home;
