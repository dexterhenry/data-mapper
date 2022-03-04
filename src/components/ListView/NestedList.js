import { makeStyles } from "@mui/styles";
import { useState } from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import SingleListItem from "./SingleListItem";
import CollapsibleListItem from "./CollapsibleListItem";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  mainList: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
    "& .MuiListSubheader-root": {
      marginBottom: 8,
      zIndex: 10,
      backgroundColor: theme.palette.table.header,
    },
    "& .MuiListItem-root": {
      paddingTop: 0,
      paddingBottom: 0,
      position: "sticky",
      top: -8,
      bottom: -17,
      "& .MuiListItemButton-root": {
        paddingTop: 0,
        paddingBottom: 0,
      },
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
  subheaderWrapper: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "40px",
    justifyContent: "space-between",
    backgroundColor: theme.palette.table.header,
  },
  subheaderOccurence: {
    paddingRight: "1rem",
  },
  endWrapperBox: {
    width: "100%",
    height: 15,
    backgroundColor: "white",
    position: "sticky",
    bottom: 0,
    zIndex: 100,
  },
}));

const subheader = ({ classes }) => {
  return (
    <div className={classes.subheaderWrapper}>
      <p>Structure</p>
      <p className={classes.subheaderOccurence}>Occurence</p>
    </div>
  );
};

export default function NestedList({ data, type }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const classes = useStyles();

  return (
    <List
      className={classes.mainList}
      subheader={<ListSubheader>{subheader({ classes })}</ListSubheader>}
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
                      isObservable={true}
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
                        isObservable={true}
                      />
                    ))}
                  </CollapsibleListItem>
                );
              })}
            </CollapsibleListItem>
          );
        }
      })}
      <Box className={classes.endWrapperBox} />
    </List>
  );
}
