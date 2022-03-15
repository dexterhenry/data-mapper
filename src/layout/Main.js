import React from "react";
import ThemeWrapper from "./Theme";
import MainLayout from "./MainLayout";
import RelationsContextProvider from "../context/RelationsContext";
import FilesContextProvider from "../context/FilesContext";

const Main = () => {
  return (
    <ThemeWrapper>
      <FilesContextProvider>
        <RelationsContextProvider>
          <MainLayout />
        </RelationsContextProvider>
      </FilesContextProvider>
    </ThemeWrapper>
  );
};

export default Main;
