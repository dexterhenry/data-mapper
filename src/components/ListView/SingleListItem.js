import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TargetIcon from "@mui/icons-material/AdjustOutlined";
import SourceIcon from "@mui/icons-material/HighlightAltOutlined";
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
    // border: "1px solid red",
    transform: `translate(-50%, -50%)`,
    // display: (isSelectedIndex) => (isSelectedIndex ? "block" : "block"),
    opacity: (isSelectedIndex) => (isSelectedIndex ? 1 : 0),
    "& svg": {
      transform: "translate(-5px, -5px)",
    },
  },
  targetListItem: {
    position: "absolute",
    left: 8,
    top: "15%",
    width: "1rem",
    height: "1rem",
    borderRadius: "50%",
    // border: "1px solid red",
    transform: `translate(-50%, -50%)`,
    "& svg": {
      transform: "translate(-5px, -5px)",
    },
  },
  listItemBtn: {
    "&.Mui-selected": {
      backgroundColor: `${theme.palette.tree.activeItem} !important`,
    },
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
  const { isDrawing, onTargetMouseUp, onSourceMouseDown, onSourceMouseUp } =
    useContext(RelationsContext);

  const divRef = useRef({
    sourceItem: type === SOURCE_TYPE ? itemText : null,
    targetItem: type === TARGET_TYPE ? itemText : null,
  });

  let isSelectedIndex = selectedIndex === itemIndex;
  const classes = useStyles(isSelectedIndex);

  const handleMouseDown = (e) =>
    type === SOURCE_TYPE ? onSourceMouseDown(e, divRef) : null;
  const handleMouseUp = (e) =>
    type === TARGET_TYPE ? onTargetMouseUp(e, divRef, itemIndex, handleItemClick) : onSourceMouseUp();

  const handleItemClick = () => handleListItemClick( itemIndex) 
  return (
    <ListItem sx={{ pl: (level + 1) * 4 }} className={liClass}>
      <ListItemButton
        selected={isSelectedIndex}
        onClick={handleItemClick}
        className={classes.listItemBtn}
      >
        <ListItemText primary={itemText} />
        <div
          id={`${type}-${itemIndex}`}
          data-item={`${itemText}`}
          ref={divRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className={
            type === SOURCE_TYPE
              ? classes.sourceListItem
              : classes.targetListItem
          }
        >
          {type === SOURCE_TYPE ? <SourceIcon /> : isDrawing && <TargetIcon />}
        </div>
      </ListItemButton>
    </ListItem>
  );
};

export default SingleListItem;
