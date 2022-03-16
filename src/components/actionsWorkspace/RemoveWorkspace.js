import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/PlaylistRemove";
import { useContext } from "react";
import { FilesContext } from "../../context/FilesContext";
import { RelationsContext } from "../../context/RelationsContext";

const RemoveWorkspace = ({ type }) => {
  const { clearWorkspace } = useContext(FilesContext);
  const { cleanRelations } = useContext(RelationsContext);

  const handleClick = () => {
    clearWorkspace(type);
    cleanRelations();
  };

  return (
    <IconButton aria-label="delete" onClick={handleClick}>
      <RemoveIcon />
    </IconButton>
  );
};

export default RemoveWorkspace;
