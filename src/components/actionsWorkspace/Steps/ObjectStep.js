import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    padding: "2rem 8rem",
  },
}));

const ObjectStep = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.rootWrapper}>
      <Grid item xs={6}>
        <FormControl fullWidth required variant="standard">
          <InputLabel id="object-step-data-type-label">Data Types</InputLabel>
          <Select
            labelId="object-step-data-type-label"
            id="object-step-data-type"
            // value={method}
            // onChange={handleChange}
            label="Method"
          >
            <MenuItem value={1}>MenuItem1</MenuItem>
            <MenuItem value={2}>MenuItem2</MenuItem>
            <MenuItem value={3}>MenuItem3</MenuItem>
            <MenuItem value={4}>MenuItem4</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default ObjectStep;
