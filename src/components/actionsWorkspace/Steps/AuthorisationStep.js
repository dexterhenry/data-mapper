import { Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import { StepsContext } from "../../../context/StepsContext";
import Typography from "@mui/material/Typography";
import { SOURCE_TYPE, TARGET_TYPE } from "../../Mapping";

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    padding: "2rem 8rem",
  },
  errorsText: {
    color: theme.palette.error.main,
    fontSize: "x-small !important",
  },
}));

const AuthorisationStep = ({ type }) => {
  const classes = useStyles();
  let form,
    handleChange,
    errors = null;

  const {
    authorisationStepFormSource,
    authorisationStepFormTarget,
    handleChangeAuthorisationStepSource,
    handleChangeAuthorisationStepTarget,
    authorisationStepErrorSource,
    authorisationStepErrorTarget,
  } = useContext(StepsContext);

  if (type === SOURCE_TYPE) {
    form = authorisationStepFormSource;
    handleChange = handleChangeAuthorisationStepSource;
    errors = authorisationStepErrorSource;
  }

  if (type === TARGET_TYPE) {
    form = authorisationStepFormTarget;
    handleChange = handleChangeAuthorisationStepTarget;
    errors = authorisationStepErrorTarget;
  }

  return (
    <Grid container spacing={1} className={classes.rootWrapper}>
      <Grid item xs={12}>
        <TextField
          required
          id={`${type}-authorisation-step-project`}
          name="authorisationProject"
          label="Project"
          value={form?.authorisationProject}
          onChange={handleChange}
          variant="standard"
          size="small"
          fullWidth
        />
        {errors.authorisationProject && (
          <Typography variant="subtitle1" className={classes.errorsText}>
            {errors.authorisationProject}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id={`${type}-authorisation-step-integration`}
          name="authorisationIntegration"
          label="Integration Name"
          variant="standard"
          value={form.authorisationIntegration}
          onChange={handleChange}
          size="small"
          fullWidth
        />
        {errors.authorisationIntegration && (
          <Typography variant="subtitle1" className={classes.errorsText}>
            {errors.authorisationIntegration}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id={`${type}-authorisation-step-username`}
          name="authorisationUsername"
          label="Username"
          variant="standard"
          value={form.authorisationUsername}
          onChange={handleChange}
          size="small"
          fullWidth
        />
        {errors.authorisationUsername && (
          <Typography variant="subtitle1" className={classes.errorsText}>
            {errors.authorisationUsername}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <TextField
          id={`${type}-authorisation-step-password`}
          name="authorisationPassword"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          value={form.authorisationPassword}
          onChange={handleChange}
          size="small"
          fullWidth
        />
        {errors.authorisationPassword && (
          <Typography variant="subtitle1" className={classes.errorsText}>
            {errors.authorisationPassword}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default AuthorisationStep;
