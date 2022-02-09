import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import MappingWorkspace from "../components/MappingWorkspace";
import SourceWorkspace from "../components/SourceWorkspace";
import TargetWorkspace from "../components/TargetWorkspace";
import { grey } from "@mui/material/colors";
import MappingHeader from "./MappingHeader";

const bgColor = grey[100];

const useStyles = makeStyles((theme) => ({
  gridWrapper: {
    padding: "1rem 0 1rem  1rem",
  },
  mappingWrapper: {
    backgroundColor: bgColor,
    paddingBottom: "2rem",
  },
}));

const Mapping = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.gridWrapper}>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <MappingHeader />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2} className={classes.mappingWrapper}>
          <Grid item xs={5}>
            <SourceWorkspace />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
            <TargetWorkspace />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <MappingWorkspace />
      </Grid>
    </Grid>
  );
};

export default Mapping;
