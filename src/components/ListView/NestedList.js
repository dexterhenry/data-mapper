import { makeStyles } from "@mui/styles";
import { useState } from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import SingleListItem from "./SingleListItem";
import CollapsibleListItem from "./CollapsibleListItem";

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

export default function NestedList({ subheader = "Subheader", data, type }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const classes = useStyles();

  return (
    <List
      className={classes.mainList}
      subheader={<ListSubheader>{subheader}</ListSubheader>}
    >
      {data.map((item) => {
        const { label, pickList } = item;

        if (!pickList) {
          return (
            <SingleListItem
              key={item.key}
              level={0}
              itemText={label}
              selectedIndex={selectedIndex}
              itemIndex={item.key}
              handleListItemClick={handleListItemClick}
              type={type}
            />
          );
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
                      selectedIndex={selectedIndex}
                      itemIndex={subItem.key}
                      handleListItemClick={handleListItemClick}
                      type={type}
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
                        selectedIndex={selectedIndex}
                        itemIndex={i.key}
                        handleListItemClick={handleListItemClick}
                        type={type}
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
