export const validationsAuthorisationStepForm = (form) => {
  let errors = {};
  //Regular Expressions
  let regxProject = /^/;
  let regxName = /^/;
  let regxPassword =
    /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,15}$/;

  let generic_message = "Credenciales inválidas";

  if (!form.authorisationProject.trim()) {
    errors.authorisationProject = "The project field is required";
  }

  if (!form.authorisationIntegration.trim()) {
    errors.authorisationIntegration = "The Integration Name field is required";
  }

  if (!form.authorisationUsername.trim()) {
    errors.authorisationUsername = "The Username field is required";
  }

  if (!form.authorisationPassword.trim()) {
    errors.authorisationPassword = "The Password is required";
  }

  return errors;
};

export const validationsWebhookStepForm = (form) => {
  let errors = {};
  //Regular Expressions
  let regxRequired = /^/;

  if (!form.webhookPath.trim()) {
    errors.webhookPath = "The Webhook Path field is required";
  }

  if (!form.webhookMethod.trim()) {
    errors.webhookMethod = "The Method field is required";
  }

  if (!form.webhookName.trim()) {
    errors.webhookName = "The Name is required";
  }

  return errors;
};