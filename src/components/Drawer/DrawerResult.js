import React, { useContext } from "react";
import { RelationsContext } from "../../context/RelationsContext";
import ResultsTable from "./ResultsTable";
import DrawLines from "./DrawLines";
import { FilesContext } from "../../context/FilesContext";

const DrawerResult = () => {
  const { relations } = useContext(RelationsContext);
  const { sourceData, targetData } = useContext(FilesContext);

  return (
    <div>
      {relations.length > 0 && <ResultsTable rows={relations} />}
      <DrawLines
        relations={relations}
        sourceData={sourceData}
        targetData={targetData}
      />
    </div>
  );
};

export default DrawerResult;
