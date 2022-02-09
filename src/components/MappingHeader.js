import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/PlaylistRemove";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import ListAddIcon from "@mui/icons-material/PlaylistAdd";

const bgColor = grey[100],
  borderColor = grey[300];

const useStyles = makeStyles((theme) => ({
  root: {
    height: "2rem",
    marginTop: ".5rem",
    paddingRight: "2rem",
    backgroundColor: bgColor,
    borderTop: `1px solid ${borderColor}`,
    borderBottom: `1px solid ${borderColor}`,
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const MappingHeader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <IconButton aria-label="copy">
        <CopyIcon />
      </IconButton>
      <IconButton aria-label="add">
        <ListAddIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <RemoveIcon />
      </IconButton>
    </Box>
  );
};

export default MappingHeader;
