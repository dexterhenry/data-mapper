import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@mui/styles";
import WorkspaceStepper from "./WorkspaceStepper";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDialog-paper": { width: "90%", maxHeight: '90vh', height:'90vh' },
    "& .MuiDialog-container": { alignItems: "flex-start" },
  },
}));

export default function ActionPopupBox(props) {
  const { onClose, open, type, ...other } = props;
  const classes = useStyles();

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose();
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
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}
