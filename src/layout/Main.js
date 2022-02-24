import React from "react";
import ThemeWrapper from "./Theme";
import MainLayout from "./MainLayout";
import RelationsContextProvider from "../context/RelationsContext";

const Main = () => {
  return (
    <ThemeWrapper>
        <RelationsContextProvider>
          <MainLayout />
        </RelationsContextProvider>
    </ThemeWrapper>
  );
};

export default Main;
