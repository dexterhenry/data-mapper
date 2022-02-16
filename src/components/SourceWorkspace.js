import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NestedList from "./ListView/NestedList";
import SourceTableSearch from "./SourceTableSeacrh";

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    width: "100%",
    height: 330,
    maxHeight: 330,
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    flexDirection: "column",
  },
  headerSection: {
    with: "100%",
    padding: "0.25rem",
    backgroundColor: theme.palette.mapping.headers,
  },
  sourceWorkspaceWrapper: {
    width: "100%",
    height: "100%",
    maxHeight: 300,
    overflow: "auto",
    border: `1px solid ${theme.palette.mapping.border}`,
  },
}));

const SourceWorkspace = () => {
  const classes = useStyles();

  return (
    <Box className={classes.rootWrapper}>
      <Box className={classes.headerSection}>
        <Typography variant="h7"> Source workspace </Typography>
      </Box>
      <SourceTableSearch />
      <Box className={classes.sourceWorkspaceWrapper}>
        <NestedList />
      </Box>
    </Box>
  );
};

export default SourceWorkspace;
