import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import logo from "../../assets/img/logo.svg";

const styles = theme => ({
  root: {
    width: "90%",
    maxWidth: 800,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto"
  },
  backButton: {
    marginRight: theme.spacing.unit,
    align: "center"
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

function getSteps() {
  return ["Step 1", "Step 2", "Step 3", "Step 4","Step 5"];
}

class Form extends React.Component {
  state = {
    activeStep: 0,
    user_name: "",
    matric_no: "",
    user_email: "",
    set_name: "",
    set_name_reason: "",
    community_projects: "",
    souvenirs: "",
    events: ""
  };

  postData(url = ``, data = {}) {
      return fetch(url, {
          method: "post",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
      })
      .then(response => response.json());
  }

  handleNext = () => {
    if (this.state.activeStep === getSteps().length - 1) {
      this.postData(process.env.REACT_APP_API_DOMAIN_NAME + '/api/suggestion',
      {
        user_name: this.state.user_name,
        matric_no: this.state.matric_no, user_email: this.state.user_email,
        set_name: this.state.set_name, set_name_reason: this.state.set_name_reason,
        community_projects: this.state.community_projects, souvenirs: this.state.souvenirs,
        events: this.state.events
      })
      .then(data => {
        // console.log(JSON.stringify(data));
        let func = this.props.history;
        window.setTimeout(function(){
          func.push('/last');
        }, 1000);
        })
      .catch(error => console.error(error));
    } else 
    {
      this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
   }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  handleUserNameChange = user_name => event => {
    this.setState({
      [user_name]: event.target.value
    });
  };
  handleMatricNoChange = matric_no => event => {
    this.setState({
      [matric_no]: event.target.value
    });
  };
  handleUserEmailChange = user_email => event => {
    this.setState({
      [user_email]: event.target.value
    });
  };

  handleSetNameChange = set_name => event => {
    this.setState({
      [set_name]: event.target.value
    });
  };

  handleSetNameReasonChange = set_name_reason => event => {
    this.setState({
      [set_name_reason]: event.target.value
    });
  };

  handleCommunityProjectChange = community_projects => event => {
    this.setState({
      [community_projects]: event.target.value
    });
  };

  handleSouvenirChange = souvenirs => event => {
    this.setState({
      [souvenirs]: event.target.value
    });
  };

  handleEventChange = events => event => {
    this.setState({
      [events]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root} id='homepage'>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
              {/* <Button onClick={this.handleReset}>Reset</Button> */}
              <Button href='last'>Next</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {activeStep === 0 && (
                  <div className='flex-column-center'>
                    <Typography variant='h5' color='white' align='center'>
                      <b>Your thoughts are important to us. Lend your voice</b>
                    </Typography>
                    <Typography variant='subheading' color='inherit'>
                      Let us know what you think in a few easy steps
                    </Typography>

                    <TextField
                      id='outlined-name'
                      label='Your Name'
                      value={this.state.user_name}
                      onChange={this.handleUserNameChange("user_name")}
                      margin='normal'
                      variant='outlined'
                      fullWidth
                    />
                    <TextField
                      id='outlined-name'
                      label='Your Matric Number'
                      value={this.state.matric_no}
                      onChange={this.handleMatricNoChange("matric_no")}
                      margin='normal'
                      variant='outlined'
                      fullWidth
                    />
                    <TextField
                      id='outlined-name'
                      label='Your Email'
                      value={this.state.user_email}
                      onChange={this.handleUserEmailChange("user_email")}
                      margin='normal'
                      variant='outlined'
                      fullWidth
                    />
                  </div>
                )}

                {activeStep === 1 && (
                  <div className='flex-column-center'>
                    <Typography variant='h5' color='white' align='center'>
                      Hello {this.state.name}!
                    </Typography>
                    <Typography variant='subheading' color='inherit'>
                      What should we name our set?
                    </Typography>

                    <TextField
                      id='outlined-name'
                      label='Set name suggestion'
                      value={this.state.set_name}
                      onChange={this.handleSetNameChange("set_name")}
                      margin='normal'
                      variant='outlined'
                      fullWidth
                    />
                    <TextField
                      id='outlined-name'
                      label='Reason for your choice?'
                      value={this.state.set_name_reason}
                      onChange={this.handleSetNameReasonChange("set_name_reason")}
                      margin='normal'
                      variant='outlined'
                      fullWidth
                    />
                  </div>
                )}

                {activeStep === 2 && (
                  <div className='flex-column-center'>
                    <Typography variant='h5' color='white' align='center'>
                      <b>What should our community project be?</b>
                    </Typography>
                    <Typography variant='subheading' color='inherit'>
                      All Ideas are welcome, we'd love to hear you out
                    </Typography>

                    <TextField
                      id='outlined-name'
                      label='How do you suggest we give back to the community?'
                      value={this.state.community_projects}
                      onChange={this.handleCommunityProjectChange("community_projects")}
                      margin='normal'
                      variant='outlined'
                      fullWidth
                    />
                  </div>
                )}

                {activeStep === 3 && (
                  <div className='flex-column-center'>
                    <Typography variant='h5' color='white' align='center'>
                      <b>What souvenirs should we consider?</b>
                    </Typography>
                    <Typography variant='subheading' color='inherit'>
                      We'd love to have awesome and memorable souvenirs
                    </Typography>

                    <TextField
                      id='outlined-name'
                      label='What souvenirs would you love to see?'
                      value={this.state.souvenirs}
                      onChange={this.handleSouvenirChange("souvenirs")}
                      margin='normal'
                      variant='outlined'
                      fullWidth
                    />
                  </div>
                )}

                {activeStep === 4 && (
                  <div className='flex-column-center'>
                    <Typography variant='h5' color='white' align='center'>
                      <b>What events do you want to see?</b>
                    </Typography>
                    <TextField
                      id='outlined-name'
                      label='What events do you want to see?'
                      value={this.state.events}
                      onChange={this.handleEventChange("events")}
                      margin='normal'
                      variant='outlined'
                      fullWidth
                    />
                  </div>
                )}
              </Typography>
              <div className='button-group'>
                <Button disabled={activeStep === 0} onClick={this.handleBack} className={classes.backButton}>
                  Back
                </Button>
                <Button variant='contained' className='button-purple' onClick={this.handleNext}>
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Form);
