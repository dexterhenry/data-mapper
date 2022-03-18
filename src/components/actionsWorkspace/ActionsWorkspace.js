import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import FileUploadWorkspace from "./FileUploadWorkspace";
import RemoveWorkspace from "./RemoveWorkspace";
import ManageWorkspace from "./ManageWorkspace";

const useStyles = makeStyles(() => ({
  root: {
    height: "2rem",
    display: "flex",
    marginTop: "-30px",
  },
}));

const ActionsWorkspace = ({ type }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <ManageWorkspace type={type} />
      <FileUploadWorkspace type={type} />
      <RemoveWorkspace type={type} />
    </Box>
  );
};

export default ActionsWorkspace;
