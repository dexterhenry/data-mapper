import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import FileUploadWorkspace from "./FileUploadWorkspace";
import RemoveWorkspace from "./RemoveWorkspace";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "2rem",
    display: "flex",
    marginTop: "-30px",
  },
}));

const ActionsWorkspace = ({type}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <IconButton aria-label="copy">
        <CopyIcon />
      </IconButton>
      <FileUploadWorkspace type={type} />
      <RemoveWorkspace type={type} />
    </Box>
  );
};

export default ActionsWorkspace;
