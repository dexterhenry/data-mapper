import { Box, CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Mapping from "../components/Mapping";

import TopAppBar, { appBarHeight } from "./AppBar";

const useStyles = makeStyles((theme) => ({
  containerWrapper: {
    display: "flex",
  },
  mainWrapper: {
    flexGrow: 1,
    marginTop: appBarHeight(theme),
    marginLeft: "5vw",
    marginRight: "5vw",
  },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.containerWrapper}>
      <CssBaseline />
      <Box component="main" className={classes.mainWrapper}>
        <TopAppBar />
        {children}
        <Mapping />
      </Box>
    </Box>
  );
};

export default MainLayout;
