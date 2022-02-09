import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import BrandIcon from "../../src/img/Miesh-logo-reverse.svg";
import { makeStyles } from "@mui/styles";

export const appBarHeight = (theme) => `${theme.spacing(8)}`;

const useStyles = makeStyles((theme) => ({
  brandContainer: {
    transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    borderRadius: "50px",
    cursor: "pointer",
    padding: "0 .45rem 0 0",
  },
}));

export default function TopAppBar() {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <div className={classes.brandContainer}>
          <img src={BrandIcon} width="100px" alt="MieshIo" />
        </div>
      </Toolbar>
    </AppBar>
  );
}
