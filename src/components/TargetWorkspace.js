import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NestedList from "./ListView/NestedList";
import TableSearch from "./TableSearch";
import { useRef } from "react";
import { TARGET_TYPE } from "./Mapping";
import { useXarrow } from "react-xarrows";
import ActionsWorkspace from "./actionsWorkspace/ActionsWorkspace";
import useSearchWorkspace from "../hooks/useSearchWorkspace";

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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
  const { targetData, searchValue, handleSearch, handleInputSearch } =
    useSearchWorkspace(TARGET_TYPE);
  const updateXarrow = useXarrow();

  const boxRef = useRef();
  const classes = useStyles();

  return (
    <Box className={classes.rootWrapper}>
      <Box className={classes.headerSection}>
        <Typography variant="h7"> Target workspace </Typography>
        <ActionsWorkspace type={TARGET_TYPE} />
      </Box>
      <TableSearch
        handleSearch={handleSearch}
        searchValue={searchValue}
        handleInput={handleInputSearch}
      />
      <Box
        ref={boxRef}
        className={classes.targetWorkspaceWrapper}
        onScroll={updateXarrow}
        data-id={"target-wrapper-box"}
      >
        {targetData && <NestedList data={targetData} type={TARGET_TYPE} />}
      </Box>
    </Box>
  );
};

export default TargetWorkspace;
