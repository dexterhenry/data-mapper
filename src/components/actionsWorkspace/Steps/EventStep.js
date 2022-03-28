import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
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

const EventStep = ({ type }) => {
  let form,
    handleChange,
    errors = null;

  const {
    eventStepFormSource,
    eventStepFormTarget,
    eventStepErrorSource,
    eventStepErrorTarget,
    handleChangeEventStepSource,
    handleChangeEventStepTarget,
  } = useContext(StepsContext);

  if (type === SOURCE_TYPE) {
    form = eventStepFormSource;
    errors = eventStepErrorSource;
    handleChange = handleChangeEventStepSource;
  }

  if (type === TARGET_TYPE) {
    form = eventStepFormTarget;
    errors = eventStepErrorTarget;
    handleChange = handleChangeEventStepTarget;
  }

  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.rootWrapper}>
      <Grid item xs={12}>
        <FormControl fullWidth required variant="standard">
          <InputLabel id={`${type}-event-step-scheduling-type-label`}>
            Scheduling Type
          </InputLabel>
          <Select
            labelId={`${type}-event-step-scheduling-type-label`}
            id={`${type}-event-step-scheduling-type`}
            value={form.eventSchedulingType}
            name="eventSchedulingType"
            onChange={handleChange}
            label="Scheduling Type"
          >
            <MenuItem value={""}>No Item</MenuItem>
            <MenuItem value={"MenuItem1"}>MenuItem1</MenuItem>
            <MenuItem value={"MenuItem2"}>MenuItem2</MenuItem>
            <MenuItem value={"MenuItem3"}>MenuItem3</MenuItem>
            <MenuItem value={"MenuItem4"}>MenuItem4</MenuItem>
          </Select>
        </FormControl>
        {errors.eventSchedulingType && (
          <Typography variant="subtitle1" className={classes.errorsText}>
            {errors.eventSchedulingType}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth required variant="standard">
          <InputLabel id={`${type}-event-step-repeat-label`}>Repeat</InputLabel>
          <Select
            labelId={`${type}-event-step-repeat-label`}
            id={`${type}-event-step-repeat`}
            value={form.eventRepeat}
            onChange={handleChange}
            name="eventRepeat"
            label="Repeat"
          >
            <MenuItem value={""}>No Item</MenuItem>
            <MenuItem value={"MenuItem1"}>MenuItem1</MenuItem>
            <MenuItem value={"MenuItem2"}>MenuItem2</MenuItem>
            <MenuItem value={"MenuItem3"}>MenuItem3</MenuItem>
            <MenuItem value={"MenuItem4"}>MenuItem4</MenuItem>
          </Select>
        </FormControl>
        {errors.eventRepeat && (
          <Typography variant="subtitle1" className={classes.errorsText}>
            {errors.eventRepeat}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default EventStep;
