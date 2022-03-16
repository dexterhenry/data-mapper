import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRef } from "react";
import { useXarrow } from "react-xarrows";
import useSearchWorkspace from "../hooks/useSearchWorkspace";
import ActionsWorkspace from "./actionsWorkspace/ActionsWorkspace";
import NestedList from "./ListView/NestedList";
import { SOURCE_TYPE } from "./Mapping";
import TableSearch from "./TableSearch";

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    width: "100%",
    height: 330,
    maxHeight: 330,
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    flexDirection: "column",
    "& .MuiPaper-root": {
      borderRadius: 0,
    },
  },
  headerSection: {
    with: "100%",
    padding: "0.25rem",
    backgroundColor: theme.palette.mapping.headers,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sourceWorkspaceWrapper: {
    width: "100%",
    height: "100%",
    maxHeight: 300,
    overflow: "auto",
    border: `1px solid ${theme.palette.mapping.border}`,
  },
}));

const getSourceData = () => [
  {
    key: "created_by",
    label: "Created By",
    titleTable: "PerPersonal",
    field_name: "createdBy",
    field_type: "string",
    field_length: 100,
    pickList: null,
  },
  {
    key: "created_date_time",
    label: "Created Date Time",
    titleTable: "PerPersonal",
    field_name: "createdDateTime",
    field_type: "datetimeoffset",
    field_length: null,
    pickList: [
      {
        key: "maiden_name",
        label: "Maiden name",
        field_type: "type",
        field_length: "length",
        pickList: [
          {
            key: "created_on",
            label: "Created On",
            field_type: "type",
            field_length: "length",
          },
          {
            key: "citizenship_12",
            label: "Citizenship 1",
            field_type: "type",
            field_length: "length",
          },
          {
            key: "citizenship_2",
            label: "Citizenship 2",
            field_type: "type",
            field_length: "length",
          },
        ],
      },
      {
        key: "end_date",
        label: "End date",
        field_type: "type",
        field_length: "length",
        pickList: [
          {
            key: "last_modified_on",
            label: "Last Modified On",
            field_type: "type",
            field_length: "length",
          },
          {
            key: "operation",
            label: "operation",
            field_type: "type",
            field_length: "length",
          },
          {
            key: "title",
            label: "Title",
            field_type: "type",
            field_length: "length",
          },
        ],
      },
      {
        key: "start_date",
        label: "Start Date",
        field_type: "type",
        field_length: "length",
        pickList: [
          {
            key: "preferred_last_name",
            label: " Preferred Last Name ",
            field_type: "type",
            field_length: "length",
          },
          {
            key: "preferred_middle_names",
            label: "Preferred Middle Names",
            field_type: "type",
            field_length: "length",
          },
        ],
      },
    ],
  },
  {
    key: "api",
    label: "Gatsby API",
    field_type: "type",
    field_length: "length",
    pickList: [
      {
        key: "themes",
        label: "Gatsby Themes",
        field_type: "type",
        field_length: "length",
      },
      {
        key: "link",
        label: "Gatsby Link",
        field_type: "type",
        field_length: "length",
      },
      {
        key: "image",
        label: "Gatsby Image",
        field_type: "type",
        field_length: "length",
      },
      {
        key: "config",
        label: "Gatsby Config",
        field_type: "type",
        field_length: "length",
      },
    ],
  },
  {
    key: "migration",
    label: "Releases & Migration",
    field_type: "type",
    field_length: "length",
    pickList: [
      {
        key: "v2",
        label: "v2 Release Notes",
        field_type: "type",
        field_length: "length",
      },
      {
        key: "v1",
        label: "v1 Release Notes",
        field_type: "type",
        field_length: "length",
      },
    ],
  },
  {
    key: "created_for_tes",
    label: "testing",
    titleTable: "PerPersonal",
    field_name: "testing",
    field_type: "string",
    field_length: 100,
    pickList: null,
  },
];

export const data = getSourceData();

const SourceWorkspace = () => {
  const updateXarrow = useXarrow();
  const { handleSearch, searchValue, handleInputSearch, sourceData } =
    useSearchWorkspace(SOURCE_TYPE);
  const sourceWrapperRef = useRef();
  const classes = useStyles();

  return (
    <Box className={classes.rootWrapper}>
      <Box className={classes.headerSection}>
        <Typography variant="h7"> Source workspace </Typography>
        <ActionsWorkspace type={SOURCE_TYPE} />
      </Box>
      <TableSearch
        handleSearch={handleSearch}
        searchValue={searchValue}
        handleInput={handleInputSearch}
      />
      <Box
        ref={sourceWrapperRef}
        className={classes.sourceWorkspaceWrapper}
        onScroll={updateXarrow}
        data-id={"source-wrapper-box"}
      >
        {sourceData && <NestedList data={sourceData} type={SOURCE_TYPE} />}
      </Box>
    </Box>
  );
};

export default SourceWorkspace;
