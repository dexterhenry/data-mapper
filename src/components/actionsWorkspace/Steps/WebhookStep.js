import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import { StepsContext } from "../../../context/StepsContext";
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

const WebhookStep = ({ type }) => {
  const {
    webHookStepFormSource,
    webHookStepFormTarget,
    webHookStepErrorSource,
    webHookStepErrorTarget,
    handleChangeWebHookStepSource,
    handleChangeWebHookStepTarget,
  } = useContext(StepsContext);

  let form,
    handleChange,
    errors = null;

  if (type === SOURCE_TYPE) {
    form = webHookStepFormSource;
    handleChange = handleChangeWebHookStepSource;
    errors = webHookStepErrorSource;
  }

  if (type === TARGET_TYPE) {
    form = webHookStepFormTarget;
    handleChange = handleChangeWebHookStepTarget;
    errors = webHookStepErrorTarget;
  }
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.rootWrapper}>
      <Grid item xs={12}>
        <TextField
          required
          id={`${type}-webhook-step-path`}
          name="webhookPath"
          label="Webhook Path"
          variant="standard"
          value={form?.webhookPath}
          onChange={handleChange}
          size="small"
          fullWidth
        />
        {errors.webhookPath && (
          <Typography variant="subtitle1" className={classes.errorsText}>
            {errors.webhookPath}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <TextField
          id={`${type}-webhook-step-parameters`}
          name="webhookParameters"
          label="Parameters"
          variant="standard"
          value={form?.webhookParameters}
          onChange={handleChange}
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth required variant="standard">
          <InputLabel id="webhook-step-method-label">Method</InputLabel>
          <Select
            labelId="webhook-step-method-label"
            id={`${type}-webhook-step-method`}
            name="webhookMethod"
            value={form?.webhookMethod}
            onChange={handleChange}
            label="Method"
          >
            <MenuItem value={"GET"}>
              GET - Get all information in the source collection
            </MenuItem>
            <MenuItem value={"POST"}>
              POST - Create an unique collection in the mongo db collection
            </MenuItem>
            <MenuItem value={"DELETE"}>
              DELETE - Delete an existing collection in the mongo db collection
            </MenuItem>
            <MenuItem value={"UPDATE"}>
              UPDATE - Update an existing collection in the mongo db collection
            </MenuItem>
          </Select>
        </FormControl>
        {errors.webhookMethod && (
          <Typography variant="subtitle1" className={classes.errorsText}>
            {errors.webhookMethod}
          </Typography>
        )}
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          id={`${type}-webhook-step-name`}
          name="webhookName"
          label="Name"
          variant="standard"
          value={form?.webhookName}
          onChange={handleChange}
          size="small"
          fullWidth
        />
        {errors.webhookName && (
          <Typography variant="subtitle1" className={classes.errorsText}>
            {errors.webhookName}
          </Typography>
        )}
      </Grid>
      <Grid item xs={6}>
        <TextField
          id={`${type}-webhook-step-value`}
          name="webhookValue"
          label="Value"
          variant="standard"
          value={form?.webhookValue}
          onChange={handleChange}
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id={`${type}-webhook-step-description`}
          name="webhookDescription"
          label="Description"
          variant="standard"
          value={form?.webhookDescription}
          onChange={handleChange}
          size="small"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default WebhookStep;
