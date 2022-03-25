import React, { createContext, useEffect, useState } from "react";
import { useCallback } from "react";
import { SOURCE_TYPE, TARGET_TYPE } from "../components/Mapping";
import { useForm } from "../hooks/useForm";
import {
  validationsAuthorisationStepForm,
  validationsDataTypeStepForm,
  validationsWebhookStepForm,
} from "../util/validationsForm";

const initialAuthorisationStepForm = {
  authorisationProject: "",
  authorisationIntegration: "",
  authorisationUsername: "",
  authorisationPassword: "",
};

const initialWebhookStepForm = {
  webhookPath: "",
  webhookParameters: "",
  webhookMethod: "",
  webhookName: "",
  webhookValue: "",
  webhookDescription: "",
};

const initialDataTypeStepForm = {
  dataTypeJsonSchema: "",
  dataTypeJsonDiscardAdditionalParameters: false,
  dataTypeJsonTypeTitle: "",
  dataTypeFileTypeTitle: "",
};

export const StepsContext = createContext();

const StepsContextProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [currentType, setCurrentType] = useState(null);
  const [isValidStep, setValidStep] = useState(false);
  const [stepError, setStepError] = useState({});

  //AuthorisationStep Forms
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

  //WebhookStep Forms
  const {
    form: webHookStepFormSource,
    errors: webHookStepErrorSource,
    setErrors: setWebHookStepErrorSource,
    handleChange: handleChangeWebHookStepSource,
  } = useForm(initialWebhookStepForm, validationsWebhookStepForm);

  const {
    form: webHookStepFormTarget,
    errors: webHookStepErrorTarget,
    setErrors: setWebHookStepErrorTarget,
    handleChange: handleChangeWebHookStepTarget,
  } = useForm(initialWebhookStepForm, validationsWebhookStepForm);

  //DataTypeStep Forms
  const {
    form: dataTypeStepFormSource,
    errors: dataTypeStepErrorSource,
    setErrors: setDataTypeErrorSource,
    handleChange: handleChangeDataTypeStepSource,
  } = useForm(initialDataTypeStepForm, validationsDataTypeStepForm);

  const {
    form: dataTypeStepFormTarget,
    errors: dataTypeStepErrorTarget,
    setErrors: setDataTypeErrorTarget,
    handleChange: handleChangeDataTypeStepTarget,
  } = useForm(initialDataTypeStepForm, validationsDataTypeStepForm);

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
      case 1:
        if (currentType === SOURCE_TYPE) {
          setWebHookStepErrorSource(
            validationsWebhookStepForm(webHookStepFormSource)
          );
        }
        if (currentType === TARGET_TYPE) {
          setWebHookStepErrorTarget(
            validationsWebhookStepForm(webHookStepFormTarget)
          );
        }
        return;
      case 2:
        if (currentType === SOURCE_TYPE) {
          setDataTypeErrorSource(
            validationsDataTypeStepForm(dataTypeStepFormSource)
          );
        }
        if (currentType === TARGET_TYPE) {
          setDataTypeErrorTarget(
            validationsDataTypeStepForm(dataTypeStepFormTarget)
          );
        }
        return;
      default:
        return null;
    }
  });

  //AuthorisationStep Effects
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

  //WebhookStep Effects
  useEffect(() => {
    if (Object.keys(webHookStepErrorSource).length === 0) {
      setValidStep(true);
    } else {
      setValidStep(false);
    }
  }, [webHookStepErrorSource]);

  useEffect(() => {
    if (Object.keys(webHookStepErrorTarget).length === 0) {
      setValidStep(true);
    } else {
      setValidStep(false);
    }
  }, [webHookStepErrorTarget]);

  //DataTypeStep Effects
  useEffect(() => {
    if (Object.keys(dataTypeStepErrorSource).length === 0) {
      setValidStep(true);
    } else {
      setValidStep(false);
    }
  }, [dataTypeStepErrorSource]);

  useEffect(() => {
    if (Object.keys(dataTypeStepErrorTarget).length === 0) {
      setValidStep(true);
    } else {
      setValidStep(false);
    }
  }, [dataTypeStepErrorTarget]);

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
    handleChangeAuthorisationStepTarget,
    webHookStepFormSource,
    webHookStepFormTarget,
    webHookStepErrorSource,
    webHookStepErrorTarget,
    handleChangeWebHookStepSource,
    handleChangeWebHookStepTarget,
    dataTypeStepFormSource,
    dataTypeStepFormTarget,
    dataTypeStepErrorSource,
    dataTypeStepErrorTarget,
    handleChangeDataTypeStepSource,
    handleChangeDataTypeStepTarget,
  };

  return <StepsContext.Provider value={data}>{children}</StepsContext.Provider>;
};

export default StepsContextProvider;
