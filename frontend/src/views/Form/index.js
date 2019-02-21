import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import validateMatricNo from "../utils";
// import Header from "../../components/Header";
// import logo from "../../assets/img/logo.svg";

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
  return ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      userName: "",
      matricNo: "",
      userEmail: "",
      setName: "",
      setNameReason: "",
      communityProjects: "",
      souvenirs: "",
      events: "",
      verified: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = event => {
    const {name, value} = event.target.name;
    this.setState({
      [name]: value
    });
  };

  postData(url = ``, data = {}) {
    return fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => response.json());
  }

  validateForms = activeStep => {
    switch (activeStep) {
      case 0:
        let { userName, matricNo, userEmail } = this.state;
        return userName !== "" && validateMatricNo(matricNo).error == false && userEmail !== "";
      case 1:
        let { setName, setNameReason } = this.state;
        return setName !== "" && setNameReason !== "";
      case 2:
        let { communityProjects } = this.state;
        return communityProjects !== "";
      case 3:
        let { souvenirs } = this.state;
        return souvenirs !== "";
      case 4:
        let { events } = this.state;
        return events !== "";
      default:
        return false;
    }
  };

  handleNext = () => {
    if (this.state.activeStep === getSteps().length - 1) {
      const {
        matricNo,
        userEmail,
        userName,
        setName,
        setNameReason,
        communityProjects,
        souvenirs,
        events
      } = this.state;
      this.postData(process.env.REACT_APP_API_DOMAIN_NAME + "/api/suggestion", {
        user_name: userName,
        matric_no: matricNo,
        user_email: userEmail,
        set_name: setName,
        set_name_reason: setNameReason,
        community_projects: communityProjects,
        souvenirs: souvenirs,
        events: events
      })
        .then(data => {
          let func = this.props.history;
          window.setTimeout(function() {
            func.push("/last");
          }, 1000);
        })
        .catch(error => console.error(error));
    } else {
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

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const {
      activeStep,
      matricNo,
      userEmail,
      userName,
      setName,
      setNameReason,
      communityProjects,
      souvenirs,
      events
    } = this.state;

    return (
      <React.Fragment>
        {/* <Header /> */}
        <div className={classes.root} id="homepage">
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
                <Typography className={classes.instructions}>
                  All steps completed
                </Typography>
                {/* <Button onClick={this.handleReset}>Reset</Button> */}
                <Button href="last">Next</Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {activeStep === 0 && (
                    <div className="flex-column-center">
                      <Typography variant="h5" color="white" align="center">
                        <b>
                          Your thoughts are important to us. Lend your voice
                        </b>
                      </Typography>
                      <Typography variant="subheading" color="inherit">
                        Let us know what you think in a few easy steps{" "}
                        {this.state.verified}
                      </Typography>

                      <TextField
                        id="outlined-name"
                        label="Your Name"
                        name="userName"
                        value={userName}
                        onChange={this.handleInputChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                      />
                      <TextField
                        id="outlined-name"
                        label="Your Matric Number"
                        name="matricNo"
                        value={matricNo}
                        onChange={this.handleInputChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                      />
                      <TextField
                        id="outlined-name"
                        label="Your Email"
                        name="userEmail"
                        value={userEmail}
                        onChange={this.handleInputChange}
                        type="email"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                      />
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="flex-column-center">
                      <Typography variant="h5" color="white" align="center">
                        Hello {userName || "Friend"}!
                      </Typography>
                      <Typography variant="subheading" color="inherit">
                        What should we name our set?
                      </Typography>

                      <TextField
                        id="outlined-name"
                        label="Set name suggestion"
                        name="setName"
                        value={setName}
                        onChange={this.handleInputChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                      />
                      <TextField
                        id="outlined-name"
                        label="Reason for your choice?"
                        name="setNameReason"
                        value={setNameReason}
                        onChange={this.handleInputChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                      />
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="flex-column-center">
                      <Typography variant="h5" color="white" align="center">
                        <b>What should our community project be?</b>
                      </Typography>
                      <Typography variant="subheading" color="inherit">
                        All Ideas are welcome, we'd love to hear you out
                      </Typography>

                      <TextField
                        id="outlined-name"
                        label="How do you suggest we give back to the community?"
                        name="communityProjects"
                        value={communityProjects}
                        onChange={this.handleInputChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                      />
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="flex-column-center">
                      <Typography variant="h5" color="white" align="center">
                        <b>What souvenirs should we consider?</b>
                      </Typography>
                      <Typography variant="subheading" color="inherit">
                        We'd love to have awesome and memorable souvenirs
                      </Typography>

                      <TextField
                        id="outlined-name"
                        label="What souvenirs would you love to see?"
                        name="souvenirs"
                        value={souvenirs}
                        onChange={this.handleInputChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                      />
                    </div>
                  )}

                  {activeStep === 4 && (
                    <div className="flex-column-center">
                      <Typography variant="h5" color="white" align="center">
                        <b>What events do you want to see?</b>
                      </Typography>
                      <TextField
                        id="outlined-name"
                        label="What events do you want to see?"
                        name="events"
                        value={events}
                        onChange={this.handleInputChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                      />
                    </div>
                  )}
                </Typography>
                <div className="button-group">
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    className="button-purple"
                    onClick={this.handleNext}
                    disabled={!this.validateForms(this.state.activeStep)}
                  >
                    {activeStep === steps.length - 1 ? "Submit" : "Next"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Form);
