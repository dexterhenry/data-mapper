import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import Typography from "@mui/material/Typography";
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

const ObjectStep = ({ type }) => {
  let form,
    handleChange,
    errors = null;

  const {
    objectStepFormSource,
    objectStepFormTarget,
    objectStepErrorSource,
    objectStepErrorTarget,
    handleChangeObjectStepSource,
    handleChangeObjectStepTarget,
  } = useContext(StepsContext);

  if (type === SOURCE_TYPE) {
    form = objectStepFormSource;
    handleChange = handleChangeObjectStepSource;
    errors = objectStepErrorSource;
  }

  if (type === TARGET_TYPE) {
    form = objectStepFormTarget;
    handleChange = handleChangeObjectStepTarget;
    errors = objectStepErrorTarget;
  }
  
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.rootWrapper}>
      <Grid item xs={12}>
        <FormControl fullWidth required variant="standard">
          <InputLabel id="object-step-data-type-label">Data Types</InputLabel>
          <Select
            labelId="object-step-data-type-label"
            id={`${type}-object-step-data-type`}
            value={form.objectDataType}
            name="objectDataType"
            onChange={handleChange}
            label="Method"
          >
            <MenuItem value={'MenuItem1'}>MenuItem1</MenuItem>
            <MenuItem value={'MenuItem2'}>MenuItem2</MenuItem>
            <MenuItem value={'MenuItem3'}>MenuItem3</MenuItem>
            <MenuItem value={'MenuItem4'}>MenuItem4</MenuItem>
          </Select>
        </FormControl>
        {errors.objectDataType && (
          <Typography variant="subtitle1" className={classes.errorsText}>
            {errors.objectDataType}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default ObjectStep;
