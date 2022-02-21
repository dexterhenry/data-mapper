import { ListItem, ListItemButton, ListItemText } from "@mui/material";

const SingleListItem = ({
  level,
  itemText,
  liClass,
  selectedIndex,
  itemIndex,
  handleListItemClick,
}) => {
  return (
    <ListItem sx={{ pl: (level + 1) * 4 }} className={liClass}>
      <ListItemButton
        selected={selectedIndex === itemIndex}
        onClick={(event) => handleListItemClick(event, itemIndex)}
      >
        <ListItemText primary={itemText} />
      </ListItemButton>
    </ListItem>
  );
};

export default SingleListItem;
