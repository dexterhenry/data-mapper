import React, { createContext, useEffect, useState } from "react";
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
  const [currentType, setCurrentType] = useState(null);
  const [isValidStep, setValidStep] = useState(false);
  const [stepError, setStepError] = useState({});

  const {
    form: authorisationStepFormSource,
    errors: authorisationStepErrorSource,
    setErrors: setAuthorisationStepErrorSource,
    handleChange: handleChangeAuthorisationStepSource,
  } = useForm(initialAuthorisationStepForm, validationsAuthorisationStepForm);

  const {
    form: authorisationStepFormTarget,
    errors: authorisationStepErrorTarget,
    setErrors: setAuthorisationStepErrorTarget,
    handleChange: handleChangeAuthorisationStepTarget,
  } = useForm(initialAuthorisationStepForm, validationsAuthorisationStepForm);

  const validationStep = useCallback(() => {
    switch (activeStep) {
      case 0:
        if (currentType === SOURCE_TYPE) {
          setAuthorisationStepErrorSource(
            validationsAuthorisationStepForm(authorisationStepFormSource)
          );
        }
        if (currentType === TARGET_TYPE) {
          setAuthorisationStepErrorTarget(
            validationsAuthorisationStepForm(authorisationStepFormTarget)
          );
        }
        return;
      default:
        return null;
    }
  });

  useEffect(() => {
    if (Object.keys(authorisationStepErrorSource).length === 0) {
      setValidStep(true);
    } else {
      setValidStep(false);
    }
  }, [authorisationStepErrorSource]);

  useEffect(() => {
    if (Object.keys(authorisationStepErrorTarget).length === 0) {
      setValidStep(true);
    } else {
      setValidStep(false);
    }
  }, [authorisationStepErrorTarget]);

  const data = {
    activeStep,
    setActiveStep,
    isValidStep,
    setValidStep,
    validationStep,
    stepError,
    setStepError,
    setCurrentType,
    authorisationStepFormSource,
    authorisationStepFormTarget,
    authorisationStepErrorSource,
    authorisationStepErrorTarget,
    handleChangeAuthorisationStepSource,
    handleChangeAuthorisationStepTarget
  };

  return <StepsContext.Provider value={data}>{children}</StepsContext.Provider>;
};

export default StepsContextProvider;
