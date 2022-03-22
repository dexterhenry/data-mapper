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
} from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    padding: "2rem 8rem",
  },
}));

const TranslatorStep = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.rootWrapper}>
      <Grid item xs={12}>
        <FormControl fullWidth required variant="standard">
          <InputLabel id="translator-step-target-data-type">
            Target Data Type
          </InputLabel>
          <Select
            labelId="translator-step-target-data-type"
            id="translator-step-target-data-type"
            // value={method}
            // onChange={handleChange}
            label="Target Data Type"
          >
            <MenuItem value={1}>MenuItem1</MenuItem>
            <MenuItem value={2}>MenuItem2</MenuItem>
            <MenuItem value={3}>MenuItem3</MenuItem>
            <MenuItem value={4}>MenuItem4</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                // checked={checked}
                // onChange={handleChange}
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
          id="data-type-step-title"
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
