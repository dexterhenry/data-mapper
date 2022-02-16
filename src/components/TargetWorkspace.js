import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NestedList from "./ListView/NestedList";
import TableSearch from "./TableSearch";
import { data } from "./SourceWorkspace";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    width: "100%",
    height: 330,
    maxHeight: 330,
    marginLeft: "-1rem",
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    flexDirection: "column",
  },
  headerSection: {
    with: "100%",
    padding: "0.25rem",
    backgroundColor: theme.palette.mapping.headers,
  },
  targetWorkspaceWrapper: {
    width: "100%",
    height: "100%",
    maxHeight: 300,
    overflowY: "auto",
    border: `1px solid ${theme.palette.mapping.border}`,
  },
}));

const TargetWorkspace = () => {
  const [dataSchema, setDataSchema] = useState(data);
  const [searchValue, setSearchValue] = useState("");

  const classes = useStyles();

  const handleSearch = (e) => {
    e.preventDefault();
    setDataSchema(
      dataSchema.filter((item) => {
        return  item.label.toLowerCase().includes(searchValue);
      })
    );
  };

  const handleInputSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    searchValue === "" && setDataSchema(data);
  }, [searchValue]);

  return (
    <Box className={classes.rootWrapper}>
      <Box className={classes.headerSection}>
        <Typography variant="h7"> Target workspace </Typography>
      </Box>
      <TableSearch
        handleSearch={handleSearch}
        searchValue={searchValue}
        handleInput={handleInputSearch}
      />
      <Box className={classes.targetWorkspaceWrapper}>
        <NestedList data={dataSchema} />
      </Box>
    </Box>
  );
};

export default TargetWorkspace;
