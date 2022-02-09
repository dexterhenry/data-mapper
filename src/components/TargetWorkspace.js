import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";

const borderColor = grey[600];

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    width: "100%",
    height: 300,
    marginLeft: '-1rem',
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    flexDirection: "column",
  },
  headerSection: {
    with: "100%",
    padding: "0.25rem",
  },
  sourceWorkspaceWrapper: {
    width: "100%",
    height: "100%",
    border: `1px solid ${borderColor}`,
  },
}));

const TargetWorkspace = () => {
  const classes = useStyles();

  return (
    <Box className={classes.rootWrapper}>
      <Box className={classes.headerSection}>
        <Typography variant="h7"> Target workspace </Typography>
      </Box>
      <Box className={classes.sourceWorkspaceWrapper}></Box>
    </Box>
  );
};

export default TargetWorkspace;
