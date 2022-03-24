import React, { createContext, useState } from "react";
import { useCallback } from "react";
import { SOURCE_TYPE, TARGET_TYPE } from "../components/Mapping";
import { useForm } from "../hooks/useForm";
import { validationsAuthorisationStepForm } from "../util/validationsForm";

const initialAuthorisationStepForm = {
  authorisationProject: "",
  authorisationIntegration: "",
  authorisationUsername: "",
  authorisationPassword: "",
};

export const StepsContext = createContext();

const StepsContextProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isValidStep, setValidStep] = useState(false);
  const [stepError, setStepError] = useState({});
  
  const submitForm = (values = null) => {
    alert(JSON.stringify(values, null, 2));
  };

  const {
    form: authorisationStepForm,
    errors: authorisationStepError,
    setErrors: setAuthorisationStepError,
    handleChange: handleChangeAuthorisationStep,
  } = useForm(initialAuthorisationStepForm, validationsAuthorisationStepForm);

  const validationStep = useCallback(() => {
    switch (activeStep) {
      case 0:
        setAuthorisationStepError(
          validationsAuthorisationStepForm(authorisationStepForm)
        );
        if (Object.keys(authorisationStepError).length === 0) {
          setValidStep(true);
        } else {
          setValidStep(false);
        }
        return;
      default:
        return null;
    }
  })

  const data = {
    activeStep,
    setActiveStep,
    isValidStep,
    setValidStep,
    validationStep,
    stepError,
    setStepError,
    authorisationStepForm,
    authorisationStepError,
    handleChangeAuthorisationStep,
  };

  return <StepsContext.Provider value={data}>{children}</StepsContext.Provider>;
};

export default StepsContextProvider;
