import { CssBaseline } from "@mui/material";
import React from "react";
import TopAppBar from "./AppBar";
import TemporaryDrawer from "./SideBar";
import ThemeWrapper from "./Theme";

const Main = () => {
  return (
    <ThemeWrapper>
      <CssBaseline />
      <TopAppBar />
      <TemporaryDrawer/>
    </ThemeWrapper>
  );
};

export default Main;
