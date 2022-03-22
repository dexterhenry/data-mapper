import {
  Grid,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    padding: "2rem 8rem",
  },
  titles: {
    fontWeight: "bold !important",
  },
}));

const DataTypeStep = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.rootWrapper}>
      {/* Section for  JSON Types​ */}
      <Grid item xs={12}>
        <Typography className={classes.titles}>JSON Types​</Typography>
        <TextField
          required
          id="data-type-step-schema"
          label="Schema"
          variant="standard"
          size="small"
          fullWidth
        />
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
            label="Discard Additional Parameters"
            size="small"
          />
        </FormGroup>
        <TextField
          id="data-type-step-title"
          label="Title"
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
          id="data-type-step-file-types"
          label="Title"
          variant="standard"
          size="small"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default DataTypeStep;
