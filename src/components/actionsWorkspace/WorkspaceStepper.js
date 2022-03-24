import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import AuthorisationStep from "./Steps/AuthorisationStep";
import { useContext, useState } from "react";
import WebhookStep from "./Steps/WebhookStep";
import DataTypeStep from "./Steps/DataTypeStep";
import ObjectStep from "./Steps/ObjectStep";
import TranslatorStep from "./Steps/TranslatorStep";
import EventStep from "./Steps/EventStep";
import ImportDetailStep from "./Steps/ImportDetailStep";
import { makeStyles } from "@mui/styles";
import { StepsContext } from "../../context/StepsContext";

const steps = [
  "Authorisation",
  "Webhook",
  "Data Type",
  "Object",
  "Translator",
  "Events",
  "Import details",
];

function _renderStepContent(step, type) {
  switch (step) {
    case 0:
      return <AuthorisationStep type={type} />;
    case 1:
      return <WebhookStep type={type} />;
    case 2:
      return <DataTypeStep type={type} />;
    case 3:
      return <ObjectStep type={type} />;
    case 4:
      return <TranslatorStep type={type} />;
    case 5:
      return <EventStep type={type} />;
    case 6:
      return <ImportDetailStep type={type} />;
    default:
      return <div>Not Found</div>;
  }
}

const useStyles = makeStyles((theme) => ({
  root: {},
  stepper: {},
  buttonsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 2,
  },
  btnBack: { marginRight: 1 },
}));

export default function WorkspaceStepper({type}) {
  const { isValidStep, activeStep, setActiveStep, validationStep } = useContext(StepsContext);
  // const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  
  const submitForm = (values = null) => {
    alert(JSON.stringify(values, null, 2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validationStep(activeStep);
    if (isValidStep) {
      if (isLastStep) {
        submitForm();
      } else {
        setActiveStep(activeStep + 1);
      }
    } else {
      return;
    }
  };

  const handleBack = () => setActiveStep(activeStep - 1);

  const classes = useStyles();

  return (
    <>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        {activeStep === steps.length ? (
          <p> last step</p>
        ) : (
          <form onSubmit={handleSubmit} noValidate="novalidate">
            {_renderStepContent(activeStep, type)}
            <Box className={classes.buttonsWrapper}>
              {activeStep !== 0 && (
                <Button className={classes.btnBack} onClick={handleBack}>
                  Back
                </Button>
              )}
              <Button type="submit" onClick={handleSubmit}>
                {isLastStep ? "Finish" : "Next"}
              </Button>
            </Box>
          </form>
        )}
      </>
    </>
  );
}
