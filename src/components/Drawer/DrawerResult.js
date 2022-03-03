import React, { useContext } from "react";
import { RelationsContext } from "../../context/RelationsContext";
import ResultsTable from "./ResultsTable";
import DrawLines from "./DrawLines";

const DrawerResult = () => {
  const { relations } = useContext(RelationsContext);
  return (
    <div>
      {relations.length > 0 && <ResultsTable rows={relations} />}
      <DrawLines relations={relations} />
    </div>
  );
};

export default DrawerResult;
