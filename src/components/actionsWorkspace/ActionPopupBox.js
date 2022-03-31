import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@mui/styles";
import WorkspaceStepper from "./WorkspaceStepper";
import { useContext } from "react";
import { StepsContext } from "../../context/StepsContext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDialog-paper": { width: "90%", maxHeight: "90vh", height: "90vh" },
    "& .MuiDialog-container": { alignItems: "flex-start" },
  },
}));

export default function ActionPopupBox(props) {
  const { onClose, open, type, ...other } = props;
  const { resetFormStepper } = useContext(StepsContext);
  const classes = useStyles();

  const handleCancel = () => {
    onClose();
    resetFormStepper(type);
  };

  return (
    <Dialog className={classes.root} maxWidth="lg" open={open} {...other}>
      <DialogTitle> Manage Mieshlet {`(${type})`}</DialogTitle>
      <DialogContent dividers>
        <WorkspaceStepper type={type} />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
