import {
  Grid,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
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

const DataTypeStep = ({ type }) => {
  let form,
    handleChange,
    errors = null;

  const {
    dataTypeStepFormSource,
    dataTypeStepFormTarget,
    dataTypeStepErrorSource,
    dataTypeStepErrorTarget,
    handleChangeDataTypeStepSource,
    handleChangeDataTypeStepTarget,
  } = useContext(StepsContext);
  if (type === SOURCE_TYPE) {
    form = dataTypeStepFormSource;
    handleChange = handleChangeDataTypeStepSource;
    errors = dataTypeStepErrorSource;
  }

  if (type === TARGET_TYPE) {
    form = dataTypeStepFormTarget;
    handleChange = handleChangeDataTypeStepTarget;
    errors = dataTypeStepErrorTarget;
  }

  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.rootWrapper}>
      {/* Section for  JSON Types​ */}
      <Grid item xs={12}>
        <Typography className={classes.titles}>JSON Types​</Typography>
        <TextField
          required
          id={`${type}-data-type-json-types-schema`}
          label="Schema"
          value={form?.dataTypeJsonSchema}
          onChange={handleChange}
          name="dataTypeJsonSchema"
          variant="standard"
          size="small"
          fullWidth
        />
        {errors.dataTypeJsonSchema && (
          <Typography variant="subtitle1" className={classes.errorsText}>
            {errors.dataTypeJsonSchema}
          </Typography>
        )}
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={form?.dataTypeJsonDiscardAdditionalParameters}
                onChange={handleChange}
                name="dataTypeJsonDiscardAdditionalParameters"
                size="small"
              />
            }
            label="Discard Additional Parameters"
            size="small"
          />
        </FormGroup>
        <TextField
          id={`${type}-data-type-step-title`}
          label="Title"
          value={form?.dataTypeJsonTypeTitle}
          name="dataTypeJsonTypeTitle"
          onChange={handleChange}
          variant="standard"
          size="small"
          fullWidth
        />
      </Grid>

      {/* Section for  File Types​ */}
      <Grid item xs={12} mt={4}>
        <Typography className={classes.titles}>File Types​</Typography>
        <TextField
          required
          id={`${type}-data-type-step-file-types`}
          label="Title"
          value={form?.dataTypeFileTypeTitle}
          name="dataTypeFileTypeTitle"
          onChange={handleChange}
          variant="standard"
          size="small"
          fullWidth
        />
        {errors.dataTypeFileTypeTitle && (
          <Typography variant="subtitle1" className={classes.errorsText}>
            {errors.dataTypeFileTypeTitle}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default DataTypeStep;
