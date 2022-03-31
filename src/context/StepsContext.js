import React, { createContext, useEffect, useState } from "react";
import { useCallback } from "react";
import { SOURCE_TYPE, TARGET_TYPE } from "../components/Mapping";
import { useForm } from "../hooks/useForm";
import {
  validationsAuthorisationStepForm,
  validationsDataTypeStepForm,
  validationsEventStepForm,
  validationsObjectStepForm,
  validationsTranslatorStepForm,
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

const initialObjectStepForm = {
  objectDataType: "",
};

const initialTranslatorStepForm = {
  translatorTargetDataType: "",
  translatorDiscardEvent: false,
  translatorCode: "",
};

const initialEventStepForm = {
  eventSchedulingType: "",
  eventRepeat: "",
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
    resetForm: resetFormAuthorisationStepSource,
  } = useForm(initialAuthorisationStepForm, validationsAuthorisationStepForm);

  const {
    form: authorisationStepFormTarget,
    errors: authorisationStepErrorTarget,
    setErrors: setAuthorisationStepErrorTarget,
    handleChange: handleChangeAuthorisationStepTarget,
    resetForm: resetFormAuthorisationStepTarget,
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

  //ObjectStep Forms
  const {
    form: objectStepFormSource,
    errors: objectStepErrorSource,
    setErrors: setObjectErrorSource,
    handleChange: handleChangeObjectStepSource,
  } = useForm(initialObjectStepForm, validationsObjectStepForm);

  const {
    form: objectStepFormTarget,
    errors: objectStepErrorTarget,
    setErrors: setObjectErrorTarget,
    handleChange: handleChangeObjectStepTarget,
  } = useForm(initialObjectStepForm, validationsObjectStepForm);

  //TranslatorStep Form
  const {
    form: translatorStepFormSource,
    errors: translatorStepErrorSource,
    setErrors: setTranslatorErrorSource,
    handleChange: handleChangeTranslatorStepSource,
  } = useForm(initialTranslatorStepForm, validationsTranslatorStepForm);

  const {
    form: translatorStepFormTarget,
    errors: translatorStepErrorTarget,
    setErrors: setTranslatorErrorTarget,
    handleChange: handleChangeTranslatorStepTarget,
  } = useForm(initialTranslatorStepForm, validationsTranslatorStepForm);

  //EventStepForm
  const {
    form: eventStepFormSource,
    errors: eventStepErrorSource,
    setErrors: setEventErrorSource,
    handleChange: handleChangeEventStepSource,
  } = useForm(initialEventStepForm, validationsEventStepForm);

  const {
    form: eventStepFormTarget,
    errors: eventStepErrorTarget,
    setErrors: setEventErrorTarget,
    handleChange: handleChangeEventStepTarget,
  } = useForm(initialEventStepForm, validationsEventStepForm);

  const validationStep = useCallback(() => {
    switch (activeStep) {
      //AuthorisationStep
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
      //WebhookStep
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
      //DataTypeStep
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
      //ObjectStep
      case 3:
        if (currentType === SOURCE_TYPE) {
          setObjectErrorSource(validationsObjectStepForm(objectStepFormSource));
        }
        if (currentType === TARGET_TYPE) {
          setObjectErrorTarget(validationsObjectStepForm(objectStepFormTarget));
        }
        return;
      //TranslatorStep
      case 4:
        if (currentType === SOURCE_TYPE) {
          setTranslatorErrorSource(
            validationsTranslatorStepForm(translatorStepFormSource)
          );
        }
        if (currentType === TARGET_TYPE) {
          setTranslatorErrorTarget(
            validationsTranslatorStepForm(translatorStepFormTarget)
          );
        }
        return;
      //EventStep
      case 5:
        if (currentType === SOURCE_TYPE) {
          setEventErrorSource(validationsEventStepForm(eventStepFormSource));
        }
        if (currentType === TARGET_TYPE) {
          setEventErrorTarget(validationsEventStepForm(eventStepFormTarget));
        }
        return;
      default:
        return null;
    }
  });

  //Reset workspace steps
  const resetFormStepper = (type) => {
    if (type === SOURCE_TYPE) {
      resetFormAuthorisationStepSource();
    }

    if (type === TARGET_TYPE) {
      resetFormAuthorisationStepTarget();
    }

    setActiveStep(0);
  };

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

  //ObjectStep Effects
  useEffect(() => {
    if (Object.keys(objectStepErrorSource).length === 0) {
      setValidStep(true);
    } else {
      setValidStep(false);
    }
  }, [objectStepErrorSource]);

  useEffect(() => {
    if (Object.keys(objectStepErrorTarget).length === 0) {
      setValidStep(true);
    } else {
      setValidStep(false);
    }
  }, [objectStepErrorTarget]);

  //TranslatorStep Effects
  useEffect(() => {
    if (Object.keys(translatorStepErrorSource).length === 0) {
      setValidStep(true);
    } else {
      setValidStep(false);
    }
  }, [translatorStepErrorSource]);

  useEffect(() => {
    if (Object.keys(translatorStepErrorTarget).length === 0) {
      setValidStep(true);
    } else {
      setValidStep(false);
    }
  }, [translatorStepErrorTarget]);

  //EventStep Effects
  useEffect(() => {
    if (Object.keys(eventStepErrorSource).length === 0) {
      setValidStep(true);
    } else {
      setValidStep(false);
    }
  }, [eventStepErrorSource]);

  useEffect(() => {
    if (Object.keys(eventStepErrorTarget).length === 0) {
      setValidStep(true);
    } else {
      setValidStep(false);
    }
  }, [eventStepErrorTarget]);

  const data = {
    activeStep,
    setActiveStep,
    isValidStep,
    setValidStep,
    validationStep,
    stepError,
    setStepError,
    setCurrentType,
    resetFormStepper,
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
    objectStepFormSource,
    objectStepFormTarget,
    objectStepErrorSource,
    objectStepErrorTarget,
    handleChangeObjectStepSource,
    handleChangeObjectStepTarget,
    translatorStepFormSource,
    translatorStepFormTarget,
    translatorStepErrorSource,
    translatorStepErrorTarget,
    handleChangeTranslatorStepSource,
    handleChangeTranslatorStepTarget,
    eventStepFormSource,
    eventStepFormTarget,
    eventStepErrorSource,
    eventStepErrorTarget,
    handleChangeEventStepSource,
    handleChangeEventStepTarget,
  };

  return <StepsContext.Provider value={data}>{children}</StepsContext.Provider>;
};

export default StepsContextProvider;
