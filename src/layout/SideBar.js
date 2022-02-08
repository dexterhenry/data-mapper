import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    width: drawerWidth,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
      width: drawerWidth,
      boxSizing: "border-box",
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();

  return <Drawer variant="permanent" className={classes.root}></Drawer>;
}
