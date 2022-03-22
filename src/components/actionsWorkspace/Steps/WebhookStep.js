import {
  FormControl,
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

const WebhookStep = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.rootWrapper}>
      <Grid item xs={12}>
        <TextField
          required
          id="webhook-step-path"
          label="Webhook Path"
          variant="standard"
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="webhook-step-parameters"
          label="Parameters"
          variant="standard"
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth required variant="standard">
          <InputLabel id="webhook-step-method-label">Method</InputLabel>
          <Select
            labelId="webhook-step-method-label"
            id="webhook-step-method"
            // value={method}
            // onChange={handleChange}
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
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          id="webhook-step-name"
          label="Name"
          variant="standard"
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="webhook-step-value"
          label="Value"
          variant="standard"
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="webhook-step-description"
          label="Description"
          variant="standard"
          size="small"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default WebhookStep;
