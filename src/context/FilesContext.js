import React, { createContext, useState } from "react";
import { SOURCE_TYPE, TARGET_TYPE } from "../components/Mapping";

export const FilesContext = createContext();

const FilesContextProvider = ({ children }) => {
  const [sourceData, setSourceData] = useState(null);
  const [searchSourceData, setSearchSourceData] = useState(null);
  const [searchTargetData, setSearchTargetData] = useState(null);
  const [targetData, setTargetData] = useState(null);
  const [wrongFileData, setWrongFileData] = useState(false);

  const setDataFromCsvArray = (csvArr, type) => {
    const data = transformDataToTree(csvArr, type);

    if (type === SOURCE_TYPE) {
      setSourceData(data);
      setSearchSourceData(data);
    }
    if (type === TARGET_TYPE) {
      setTargetData(data);
      setSearchTargetData(data);
    }
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

  const clearWorkspace = (type) => {
    if (type === SOURCE_TYPE) {
      setSourceData(null);
      setSearchSourceData(null);
    }
    if (type === TARGET_TYPE) {
      setTargetData(null);
      setSearchTargetData(null);
    }
  };

  const updateData = (type, data) => {
    if (type === SOURCE_TYPE) setSourceData(data);
    if (type === TARGET_TYPE) setTargetData(data);
  };

  const updateSearchData = (type) => {
    if (type === SOURCE_TYPE) setSourceData(searchSourceData);
    if (type === TARGET_TYPE) setTargetData(searchTargetData);
  };

  const data = {
    sourceData,
    targetData,
    wrongFileData,
    searchSourceData,
    searchTargetData,
    setDataFromCsvArray,
    closeAlertWrongFileData,
    clearWorkspace,
    updateData,
    updateSearchData,
  };

  return <FilesContext.Provider value={data}>{children}</FilesContext.Provider>;
};

export default FilesContextProvider;
