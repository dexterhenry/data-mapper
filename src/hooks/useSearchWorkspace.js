import { useState, useEffect, useContext } from "react";
import { SOURCE_TYPE, TARGET_TYPE } from "../components/Mapping";
import { FilesContext } from "../context/FilesContext";

const useSearchWorkspace = (type) => {
  const [searchValue, setSearchValue] = useState("");
  const { sourceData, targetData, updateData, updateSearchData } =
    useContext(FilesContext);

  const handleSearch = (e) => {
    e.preventDefault();
    if (type === SOURCE_TYPE) {
      const data = sourceData.filter((item) => {
        return item.label.toLowerCase().includes(searchValue.toLowerCase());
      });
      updateData(SOURCE_TYPE, data);
    }

    if (type === TARGET_TYPE) {
      const data = targetData.filter((item) => {
        return item.label.toLowerCase().includes(searchValue.toLowerCase());
      });
      updateData(TARGET_TYPE, data);
    }
  };

  const handleInputSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    searchValue === "" && type === SOURCE_TYPE && updateSearchData(SOURCE_TYPE);
    searchValue === "" && type === TARGET_TYPE && updateSearchData(TARGET_TYPE);
  }, [searchValue, type]);

  return {
    searchValue,
    sourceData,
    targetData,
    handleSearch,
    handleInputSearch,
  };
};

export default useSearchWorkspace;
