import IconButton from "@mui/material/IconButton";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";

function ConfirmationDialogRaw(props) {
  const { onClose, open, type, ...other } = props;

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose();
  };

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
      {...other}
    >
      <DialogTitle>Type {`${type}`}</DialogTitle>
      <DialogContent dividers>Content</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

export default function ManageWorkspace({ type }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton aria-label="copy" onClick={() => setOpen(true)}>
        <CopyIcon />
      </IconButton>
      <ConfirmationDialogRaw
        id="ringtone-menu"
        type={type}
        keepMounted
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
