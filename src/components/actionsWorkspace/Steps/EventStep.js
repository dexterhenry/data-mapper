import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    padding: "2rem 8rem",
  },
}));

const EventStep = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.rootWrapper}>
      <Grid item xs={12}>
        <FormControl fullWidth required variant="standard">
          <InputLabel id="event-step-scheduling-type-label">
            Scheduling Type
          </InputLabel>
          <Select
            labelId="event-step-scheduling-type-label"
            id="event-step-scheduling-type"
            // value={method}
            // onChange={handleChange}
            label="Scheduling Type"
          >
            <MenuItem value={1}>MenuItem1</MenuItem>
            <MenuItem value={2}>MenuItem2</MenuItem>
            <MenuItem value={3}>MenuItem3</MenuItem>
            <MenuItem value={4}>MenuItem4</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth required variant="standard">
          <InputLabel id="event-step-repeat-label">Repeat</InputLabel>
          <Select
            labelId="event-step-repeat-label"
            id="event-step-repeat"
            // value={method}
            // onChange={handleChange}
            label="Repeat"
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

export default EventStep;
