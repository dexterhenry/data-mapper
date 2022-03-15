import { Alert, IconButton, Snackbar } from "@mui/material";
import ListAddIcon from "@mui/icons-material/PlaylistAdd";
import { useContext, useRef, useState } from "react";
import { SOURCE_TYPE } from "../Mapping";
import { makeStyles } from "@mui/styles";
import csvToArray from "../../util/csvToArray";
import { FilesContext } from "../../context/FilesContext";

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
  const [isFilePickedError, setIsFilePickedError] = useState(false);
  const { setDataFromCsvArray } = useContext(FilesContext);

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
    if (eventFile?.type === "text/csv") {
      const input = eventFile;
      const reader = new FileReader();
      //reed the file data
      reader.onload = function (e) {
        const text = e.target.result;
        const data = csvToArray(text);
        //put value of workspace type
        setDataFromCsvArray(data, type);
      };

      reader.readAsText(input);
    } else {
      //show alert for wrong file type
      setIsFilePickedError(eventFile);
    }
  };

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
        autoHideDuration={7000}
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
