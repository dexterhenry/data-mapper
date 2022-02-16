import { ListItem, ListItemButton, ListItemText } from "@mui/material";

const SingleListItem = ({ level, itemText, liClass }) => {
  return (
    <ListItem sx={{ pl: (level + 1) * 4 }} className={liClass}>
      <ListItemButton>
        <ListItemText primary={itemText} />
      </ListItemButton>
    </ListItem>
  );
};

export default SingleListItem;
