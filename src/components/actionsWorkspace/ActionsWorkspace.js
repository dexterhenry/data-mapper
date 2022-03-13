import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/PlaylistRemove";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import FileUploadWorkspace from "./FileUploadWorkspace";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "2rem",
    display: "flex",
    marginTop: "-30px",
  },
}));

const ActionsWorkspace = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <IconButton aria-label="copy">
        <CopyIcon />
      </IconButton>
      <FileUploadWorkspace />
      <IconButton aria-label="delete">
        <RemoveIcon />
      </IconButton>
    </Box>
  );
};

export default ActionsWorkspace;
