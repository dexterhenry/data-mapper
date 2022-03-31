import IconButton from "@mui/material/IconButton";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import { useState } from "react";
import ActionPopupBox from "./ActionPopupBox";
import StepsContextProvider from "../../context/StepsContext";

export default function ManageWorkspace({ type }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton aria-label="copy" onClick={() => setOpen(true)}>
        <CopyIcon />
      </IconButton>
      <StepsContextProvider>
        <ActionPopupBox
          id="ringtone-menu"
          type={type}
          keepMounted
          open={open}
          onClose={handleClose}
        />
      </StepsContextProvider>
    </>
  );
}
