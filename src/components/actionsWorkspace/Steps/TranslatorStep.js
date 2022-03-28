import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
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
  titles: {
    fontWeight: "bold !important",
  },
  errorsText: {
    color: theme.palette.error.main,
    fontSize: "x-small !important",
  },
}));

const TranslatorStep = ({ type }) => {
  let form,
    handleChange,
    errors = null;

  const {
    translatorStepFormSource,
    translatorStepFormTarget,
    translatorStepErrorSource,
    translatorStepErrorTarget,
    handleChangeTranslatorStepSource,
    handleChangeTranslatorStepTarget,
  } = useContext(StepsContext);

  if (type === SOURCE_TYPE) {
    form = translatorStepFormSource;
    errors = translatorStepErrorSource;
    handleChange = handleChangeTranslatorStepSource;
  }

  if (type === TARGET_TYPE) {
    form = translatorStepFormTarget;
    errors = translatorStepErrorTarget;
    handleChange = handleChangeTranslatorStepTarget;
  }

  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.rootWrapper}>
      <Grid item xs={12}>
        <FormControl fullWidth required variant="standard">
          <InputLabel id={`${type}-translator-step-target-data-type-label`}>
            Target Data Type
          </InputLabel>
          <Select
            labelId={`${type}-translator-step-target-data-type-label`}
            id={`${type}-translator-step-target-data-type`}
            value={form.translatorTargetDataType}
            name="translatorTargetDataType"
            onChange={handleChange}
            label="Target Data Type"
          >
            <MenuItem value={""}>No Item</MenuItem>
            <MenuItem value={"1"}>MenuItem1</MenuItem>
            <MenuItem value={"2"}>MenuItem2</MenuItem>
            <MenuItem value={"3"}>MenuItem3</MenuItem>
            <MenuItem value={"4"}>MenuItem4</MenuItem>
          </Select>
        </FormControl>
        {errors.translatorTargetDataType && (
          <Typography variant="subtitle1" className={classes.errorsText}>
            {errors.translatorTargetDataType}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={form.translatorDiscardEvent}
                onChange={handleChange}
                name="translatorDiscardEvent"
                size="small"
              />
            }
            label="Discard Event"
            size="small"
          />
        </FormGroup>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id={`${type}-translator-step-code`}
          value={form.translatorCode}
          name="translatorCode"
          onChange={handleChange}
          label="Code"
          variant="standard"
          size="small"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default TranslatorStep;
