import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DrawerResult from "./Drawer/DrawerResult";

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    width: "100%",
  },
  headerSection: {
    with: "100%",
    padding: "0.25rem 1rem",
    marginRight: "1rem",
    backgroundColor: theme.palette.mapping.headers,
  },
  mappingWorkspaceWrapper: {},
}));

const MappingWorkspace = () => {
  const classes = useStyles();

  return (
    <Box className={classes.rootWrapper}>
      <Box className={classes.headerSection}>
        <Typography variant="h7"> Mapping expression workspace </Typography>
      </Box>
      <Box className={classes.mappingWorkspaceWrapper}>
        <DrawerResult />
      </Box>
    </Box>
  );
};

export default MappingWorkspace;
