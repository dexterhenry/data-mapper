import { Alert, IconButton, Snackbar } from "@mui/material";
import ListAddIcon from "@mui/icons-material/PlaylistAdd";
import { useRef, useState } from "react";
import { SOURCE_TYPE } from "../Mapping";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  file: {
    display: "none",
  },
  spanErrorBold: {
    "& span": {
      fontWeight: "bold",
    },
  },
}));

const FileUploadWorkspace = ({ type = SOURCE_TYPE }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePickedError, setIsFilePickedError] = useState(false);

  const inputFileRef = useRef();
  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault();
    inputFileRef.current.click();
  };

  const handleCloseAlert = () => {
    setIsFilePickedError(false);
  };

  const handleChange = (event) => {
    const eventFile = event.target.files[0];
    if (eventFile.type === "text/csv") {
      //reed an show the tree
      setSelectedFile(eventFile);
    } else {
      //show alert for wrong file type
      setIsFilePickedError(eventFile);
    }
  };

  const handleSubmission = () => {};

  return (
    <>
      <IconButton aria-label="add" onClick={handleClick}>
        <ListAddIcon />
      </IconButton>
      <input
        ref={inputFileRef}
        type="file"
        accept=".csv"
        name={`${type}File`}
        className={classes.file}
        onChange={handleChange}
      />
      <Snackbar
        open={Boolean(isFilePickedError)}
        autoHideDuration={70000}
        onClose={handleCloseAlert}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="error"
          className={classes.spanErrorBold}
        >
          File type is <span>{` ${isFilePickedError?.type} `}</span>
          must be <span> text/csv</span>
        </Alert>
      </Snackbar>
    </>
  );
};

export default FileUploadWorkspace;
