import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import FileUploadWorkspace from "./FileUploadWorkspace";
import RemoveWorkspace from "./RemoveWorkspace";
import ManageWorkspace from "./ManageWorkspace";
import { useContext } from "react";
import { RelationsContext } from "../../context/RelationsContext";

const useStyles = makeStyles(() => ({
  root: {
    height: "2rem",
    display: "flex",
    marginTop: "-30px",
  },
}));

const ActionsWorkspace = ({ type }) => {
  const { relations } = useContext(RelationsContext);
  const hasRelations = relations.length > 0;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {hasRelations && <ManageWorkspace type={type} />}
      <FileUploadWorkspace type={type} />
      <RemoveWorkspace type={type} />
    </Box>
  );
};

export default ActionsWorkspace;
