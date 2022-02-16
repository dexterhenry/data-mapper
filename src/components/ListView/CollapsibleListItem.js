import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles((theme, hasBorder) => ({
  root: {
    "& .MuiListItem-root": {
      paddingTop: 0,
      paddingBottom: 0,
    },

    "& .MuiListItemButton-root": {
      marginLeft: "-20px",
      borderLeft: (hasBorder) =>
        hasBorder && `3px dashed ${theme.palette.tree.border}`,
      "& .MuiListItemIcon-root": {
        minWidth: "32px",
      },
    },
  },
}));

const CollapsibleListItem = ({
  children,
  itemText,
  level,
  hasBorder = false,
}) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles(hasBorder);

  const handleClick = () => setOpen(!open);

  return (
    <>
      <ListItem
        sx={{ pl: (level + 1) * 4, pt: 0, pb: 0 }}
        className={classes.root}
      >
        <ListItemButton onClick={handleClick} sx={{ minWidth: "32px" }}>
          <ListItemIcon>{open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
          <ListItemText primary={itemText} />
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>{children}</List>
      </Collapse>
    </>
  );
};

export default CollapsibleListItem;
