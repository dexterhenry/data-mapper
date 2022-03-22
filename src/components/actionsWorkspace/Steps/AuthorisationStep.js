import { Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    padding: "2rem 8rem",
  },
}));

const AuthorisationStep = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.rootWrapper}>
      <Grid item xs={12}>
        <TextField
          required
          id="authorisation-step-project"
          label="Project"
          variant="standard"
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="authorisation-step-integration"
          label="Integration Name"
          variant="standard"
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="authorisation-step-username"
          label="Username"
          variant="standard"
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="authorisation-step-password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          size="small"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default AuthorisationStep;
