import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import TargetIcon from "@mui/icons-material/AdjustOutlined";
import SourceIcon from "@mui/icons-material/HighlightAltOutlined";
import { useContext, useEffect, useRef, useState } from "react";
import { RelationsContext } from "../../context/RelationsContext";
import { SOURCE_TYPE, TARGET_TYPE } from "../Mapping";
import { useXarrow } from "react-xarrows";

const useStyles = makeStyles((theme, isSelectedIndex) => ({
  sourceListItem: {
    position: "absolute",
    right: 0,
    top: "40%",
    width: "1rem",
    height: "1rem",
    borderRadius: "50%",
    transform: `translate(-50%, -50%)`,
    opacity: (isSelectedIndex) => (isSelectedIndex ? 1 : 0),
    "& svg": {
      transform: "translate(-5px, -2px)",
    },
  },
  targetListItem: {
    position: "absolute",
    left: 8,
    top: "15%",
    width: "1rem",
    height: "1rem",
    borderRadius: "50%",
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
  itemSourceType,
  itemTargetType,
  isObservable = false,
}) => {
  const {
    isDrawing,
    onTargetMouseUp,
    onSourceMouseDown,
    onSourceMouseUp,
    getOccurrence,
    relations,
  } = useContext(RelationsContext);
  const [occurrence, setOccurrence] = useState(getOccurrence(itemText, type));
  const updateXarrow = useXarrow();

  const divRef = useRef();
  const listRef = useRef();

  let isSelectedIndex = selectedIndex === itemIndex;
  const classes = useStyles(isSelectedIndex);

  const handleMouseDown = (e) =>
    type === SOURCE_TYPE ? onSourceMouseDown(e, divRef) : null;
  const handleMouseUp = (e) =>
    type === TARGET_TYPE
      ? onTargetMouseUp(e, divRef, itemIndex, handleItemClick)
      : onSourceMouseUp();

  const handleItemClick = () => handleListItemClick(itemIndex);

  const handleObserverSourceItem = (entries) => {
    const { isIntersecting, rootBounds, boundingClientRect } = entries[0];
    const { style } = divRef?.current;
    if (isIntersecting) {
      //is visible on list
      style.position = "absolute";
      style.top = "40%";
      style.left = "";
      style.opacity = "";
    } else {
      //is out of view
      const { right, bottom, top, y: rootY } = rootBounds;
      const { y: targetY } = boundingClientRect;

      const isUp = rootY > targetY,
        elementTop = isUp ? `${top - 25}px` : `${bottom - 8}px`;

      style.position = "fixed";
      style.opacity = -1;
      style.top = elementTop;
      style.left = `${right - 14}px`;
      updateXarrow();
    }
  };

  const handleObserverTargetItem = (entries) => {
    const { isIntersecting, rootBounds, boundingClientRect } = entries[0];
    const { style } = divRef.current;
    if (isIntersecting) {
      //is visible on list
      style.position = "absolute";
      style.opacity = 1;
      style.left = "8px";
      style.top = "15%";
    } else {
      //is out of view
      const { left, bottom, top, y: rootY } = rootBounds;
      const { y: targetY } = boundingClientRect;

      const isUp = rootY > targetY,
        elementTop = isUp ? `${top + 10}px` : `${bottom - 8}px`;
      style.position = "fixed";
      style.opacity = -1;
      style.top = elementTop;
      style.left = `${left - 30}px`;
      updateXarrow();
    }
  };

  useEffect(() => {
    setOccurrence(getOccurrence(itemText, type));
  }, [relations]);

  useEffect(() => {
    let observer = null;

    const observerSourceOptions = {
      root: document.querySelector('[data-id="source-wrapper-box"]'),
      threshold: 0.5,
      rootMargin: "-10px 0px 0px -50px",
    };

    const observerTargetOptions = {
      root: document.querySelector('[data-id="target-wrapper-box"]'),
      threshold: 0.5,
      rootMargin: "-10px 0px 0px -50px",
    };

    if (type === SOURCE_TYPE && isObservable) {
      let observer = new IntersectionObserver(
        handleObserverSourceItem,
        observerSourceOptions
      );

      observer.observe(listRef.current);
    }

    if (type === TARGET_TYPE && isObservable) {
      let observer = new IntersectionObserver(
        handleObserverTargetItem,
        observerTargetOptions
      );

      observer.observe(listRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <ListItem sx={{ pl: (level + 1) * 4 }} className={liClass} ref={listRef}>
      <ListItemButton
        selected={isSelectedIndex}
        onClick={handleItemClick}
        className={classes.listItemBtn}
      >
        <ListItemText primary={itemText} />
        <Typography mr={3}>{occurrence}</Typography>
        <div
          id={`${type}-${itemIndex}`}
          data-item={`${itemText}`}
          data-source-type={`${itemSourceType}`}
          data-target-type={`${itemTargetType}`}
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
