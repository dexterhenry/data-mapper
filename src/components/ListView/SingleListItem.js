import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext, useRef } from "react";
import { RelationsContext } from "../../context/RelationsContext";
import { SOURCE_TYPE, TARGET_TYPE } from "../Mapping";

const useStyles = makeStyles((theme, isSelectedIndex) => ({
  sourceListItem: {
    position: "absolute",
    right: 0,
    top: "50%",
    width: "1rem",
    height: "1rem",
    borderRadius: "50%",
    border: "1px solid red",
    transform: `translate(-50%, -50%)`,
    display: (isSelectedIndex) => (isSelectedIndex ? "block" : "none"),
  },
  targetListItem: {
    position: "absolute",
    left: 8,
    top: "15%",
    width: "1rem",
    height: "1rem",
    borderRadius: "50%",
    border: "1px solid red",
    transform: `translate(-50%, -50%)`,
  },
}));

const SingleListItem = ({
  level,
  itemText,
  liClass,
  selectedIndex,
  itemIndex,
  handleListItemClick,
  type,
}) => {
  const { isDrawing, onTargetMouseDown, onSourceMouseUp } =
    useContext(RelationsContext);

  const divRef = useRef({
    sourceItem: type === SOURCE_TYPE ? itemText : null,
    targetItem: type === TARGET_TYPE ? itemText : null,
  });
  let isSelectedIndex = selectedIndex === itemIndex;
  const classes = useStyles(isSelectedIndex);

  return (
    <ListItem sx={{ pl: (level + 1) * 4 }} className={liClass}>
      <ListItemButton
        selected={isSelectedIndex}
        onClick={(event) => handleListItemClick(event, itemIndex)}
      >
        <ListItemText primary={itemText} />
        <div
          data-item={`${itemText}`}
          ref={divRef}
          onMouseDown={
            type === SOURCE_TYPE ? (e) => onTargetMouseDown(e, divRef) : null
          }
          onMouseUp={
            type === TARGET_TYPE ? (e) => onSourceMouseUp(e, divRef) : null
          }
          className={
            type === SOURCE_TYPE
              ? classes.sourceListItem
              : (isDrawing && classes.targetListItem) || ""
          }
        ></div>
      </ListItemButton>
    </ListItem>
  );
};

export default SingleListItem;
