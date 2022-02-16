import { makeStyles } from "@mui/styles";
import { useState } from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import SingleListItem from "./SingleListItem";
import CollapsibleListItem from "./CollapsibleListItem";

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
            key: "citizenship_2",
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
];

const useStyles = makeStyles((theme) => ({
  mainList: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    "& .MuiListSubheader-root": {
      zIndex: 10,
    },
  },
  lv2List: {
    paddingTop: "0 !important",
    paddingBottom: "0 !important",
    "& .MuiListItemButton-root": {
      borderLeft: `3px dashed ${theme.palette.tree.border}`,
    },
  },
  lv3List: {
    paddingTop: "0 !important",
    paddingBottom: "0 !important",
    "&:before": {
      content: '" "',
      position: "absolute",
      width: 3,
      top: 0,
      bottom: 0,
      left: "44px",
      backgroundColor: `${theme.palette.tree.border}`,
      zIndex: 1,
    },
    "& .MuiListItemButton-root": {
      borderLeft: `3px dashed ${theme.palette.tree.border}`,
    },
  },
}));
const data = getSourceData();

export default function NestedList({ subheader = "Subheader" }) {
  const classes = useStyles();
  return (
    <List
      className={classes.mainList}
      subheader={<ListSubheader>{subheader}</ListSubheader>}
    >
      {data.map((item) => {
        const { label, pickList } = item;

        if (!pickList) {
          return <SingleListItem key={item.key} level={0} itemText={label} />;
        } else {
          return (
            <CollapsibleListItem key={item.key} itemText={label} level={0}>
              {pickList.map((subItem) => {
                const { label, pickList } = subItem;

                if (!pickList) {
                  return (
                    <SingleListItem
                      key={subItem.key}
                      level={1}
                      itemText={label}
                      liClass={classes.lv2List}
                    />
                  );
                }
                return (
                  <CollapsibleListItem
                    key={subItem.key}
                    itemText={label}
                    level={1}
                    hasBorder={true}
                  >
                    {pickList.map((i) => (
                      <SingleListItem
                        key={i.key}
                        level={2}
                        itemText={i.label}
                        liClass={classes.lv3List}
                      />
                    ))}
                  </CollapsibleListItem>
                );
              })}
            </CollapsibleListItem>
          );
        }
      })}
    </List>
  );
}
