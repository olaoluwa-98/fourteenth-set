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
  return ["Step 1", "Step 2", "Step 3", "Step 4"];
}

class Form extends React.Component {
  state = {
    activeStep: 0,
    name: "",
    setName: "",
    setNameReason: "",
    communityProject: "",
    souvenirs: ""
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
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

  handleNameChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSetNameChange = setName => event => {
    this.setState({
      [setName]: event.target.value
    });
  };

  handleSetNameReasonChange = setNameReason => event => {
    this.setState({
      [setNameReason]: event.target.value
    });
  };

  handleCommunityProjectChange = communityProject => event => {
    this.setState({
      [communityProject]: event.target.value
    });
  };

  handleSouvenirChange = souvenirs => event => {
    this.setState({
      [souvenirs]: event.target.value
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
                      value={this.state.name}
                      onChange={this.handleNameChange("name")}
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
                      what should we name our set?
                    </Typography>

                    <TextField
                      id='outlined-name'
                      label='Set name suggestion'
                      value={this.state.setName}
                      onChange={this.handleSetNameChange("setName")}
                      margin='normal'
                      variant='outlined'
                      fullWidth
                    />
                    <TextField
                      id='outlined-name'
                      label='Reason for your choice?'
                      value={this.state.setNameReason}
                      onChange={this.handleSetNameReasonChange("setNameReason")}
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
                      value={this.state.communityProject}
                      onChange={this.handleCommunityProjectChange("communityProject")}
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
