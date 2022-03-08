import { Alert, Grid, Snackbar } from "@mui/material";
import { makeStyles } from "@mui/styles";

import MappingWorkspace from "../components/MappingWorkspace";
import SourceWorkspace from "../components/SourceWorkspace";
import TargetWorkspace from "../components/TargetWorkspace";
import { grey } from "@mui/material/colors";
import MappingHeader from "./MappingHeader";
import { Xwrapper } from "react-xarrows";
import { Cursor } from "./cursor/Cursor";
import { useContext } from "react";
import { RelationsContext } from "../context/RelationsContext";

const bgColor = grey[100];
export const SOURCE_TYPE = "source";
export const TARGET_TYPE = "target";

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
  const { onSourceMouseUp, relationFault, setRelationFault } =
    useContext(RelationsContext);

  const handleMouseUp = () => onSourceMouseUp();
  const handleCloseAlert = () => setRelationFault(false);

  return (
    <Xwrapper>
      <Grid
        container
        spacing={2}
        className={classes.gridWrapper}
        onMouseUp={handleMouseUp}
      >
        <Grid container>
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
      <Cursor />
      <Snackbar
        open={Boolean(relationFault)}
        autoHideDuration={7000}
        onClose={handleCloseAlert}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert onClose={handleCloseAlert} severity="error">
          {relationFault}
        </Alert>
      </Snackbar>
    </Xwrapper>
  );
};

export default Mapping;
