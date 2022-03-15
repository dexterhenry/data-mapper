import React, { createContext, useState } from "react";
import { SOURCE_TYPE, TARGET_TYPE } from "../components/Mapping";

export const FilesContext = createContext();

const FilesContextProvider = ({ children }) => {
  const [sourceData, setSourceData] = useState(null);
  const [targetData, setTargetData] = useState(null);
  const [wrongFileData, setWrongFileData] = useState(false);

  const setDataFromCsvArray = (csvArr, type) => {
    if (type === SOURCE_TYPE) setSourceData(transformDataToTree(csvArr, type));
    if (type === TARGET_TYPE) setTargetData(transformDataToTree(csvArr, type));
  };

  const transformDataToTree = (data, type) => {
    let transformedData = [];
    data.forEach((item) => {
      let itemData = {
        key: `${item.titleTable}_${item.fieldName}_${type}`,
        label: `${item.fieldLabel}`,
        titleTable: `${item.titleTable}`,
        field_name: `${item.fieldName}`,
        field_type: `${item.fieldType}`,
        field_length: `${item.fieldLength}`,
        pickList: null, //TO do I need to understand this to see the structure
      };
      transformedData = [...transformedData, itemData];
    });

    //verify that the data is correct
    transformedData = transformedData.filter(
      (el) => el.titleTable !== "undefined" && el.label !== "undefined"
    );

    const isRightData = transformedData.length > 1;

    if (isRightData) return transformedData;

    setWrongFileData(true);
    return [];
  };
  const closeAlertWrongFileData = () => setWrongFileData(false);

  const data = {
    sourceData,
    targetData,
    wrongFileData,
    setDataFromCsvArray,
    closeAlertWrongFileData,
  };

  return <FilesContext.Provider value={data}>{children}</FilesContext.Provider>;
};

export default FilesContextProvider;
