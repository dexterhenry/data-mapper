import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    width: "100%",
    },
  headerSection: {
    with: "100%",
    padding: "0.25rem",
  },
  mappingWorkspaceWrapper: {},
}));

const MappingWorkspace = () => {
  const classes = useStyles();

  return (
    <Box className={classes.rootWrapper}>
      <Box className={classes.headerSection}>
        <Typography variant="h7"> MappingWorkspace </Typography>
      </Box>
      <Box className={classes.mappingWorkspaceWrapper}></Box>
    </Box>
  );
};

export default MappingWorkspace;
