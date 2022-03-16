import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/PlaylistRemove";
import { useContext } from "react";
import { FilesContext } from "../../context/FilesContext";

const RemoveWorkspace = ({ type }) => {
  const { clearWorkspace } = useContext(FilesContext);

  const handleClick = () => {
    clearWorkspace(type);
  };

  return (
    <IconButton aria-label="delete" onClick={handleClick}>
      <RemoveIcon />
    </IconButton>
  );
};

export default RemoveWorkspace;
