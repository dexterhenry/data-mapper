import {
  Grid,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { useContext, useEffect, useState } from "react";
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
  const [dataType, setDataType] = useState("");

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

  const jsonType = dataType === "json";
  const fileType = dataType === "file";

  const handleChangeDataType = (e) => {
    setDataType(e.target.value);
    handleChange(e);
  };

  useEffect(() => {
    setDataType(form.dataType);
  }, []);

  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.rootWrapper}>
      <Grid item xs={12}>
        <FormControl fullWidth required variant="standard">
          <InputLabel id={`${type}-data-type-label`}>
            Pick a data type
          </InputLabel>
          <Select
            labelId={`${type}-data-type-label`}
            value={form.dataType}
            onChange={handleChangeDataType}
            name="dataType"
            label="Pick a data type"
          >
            <MenuItem value={"json"}>JSON Types​</MenuItem>
            <MenuItem value={"file"}>File Types</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {/* Section for  JSON Types​ */}
      {jsonType && (
        <Grid item xs={12} mt={4}>
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
      )}
      {/* Section for  File Types​ */}
      {fileType && (
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
      )}
    </Grid>
  );
};

export default DataTypeStep;
