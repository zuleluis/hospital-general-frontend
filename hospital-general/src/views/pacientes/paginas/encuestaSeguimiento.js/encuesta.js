import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Stepper,
  Step,
  StepButton,
  Typography
} from '@material-ui/core';
import PasoUno from './FirstStep';
import PasoDos from './SecondStep';
import PasoTres from './ThirdStep';
import PasoCuatro from './FourthStep';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: "white",
  }
}));

function getSteps() {
  return ['Información obtenida automáticamente', 'Información de encuesta', 'Información de encuesta', 'Finalizar'];
}

export default function EncuestaLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps() - 1;
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)} completed={completed[index]}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        { activeStep === 0 && <PasoUno handleComplete={handleComplete}/> }
        { activeStep === 1 && <PasoDos handleComplete={handleComplete}/> }
        { activeStep === 2 && <PasoTres handleComplete={handleComplete}/> }
        { allStepsCompleted() && activeStep === 3 && <PasoCuatro/> }
        { !allStepsCompleted() && activeStep === 3 && <Typography align="center" variant="h6">Favor de completar los pasos </Typography>}
      </div>
    </div>
  );
}
