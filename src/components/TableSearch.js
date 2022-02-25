import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    padding: "0 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "32px",
    zIndex: 10
  },
  searchInput: {
    marginLeft: "8px",
    flex: 1,
  },
  searchIcon: {
    height: "28px",
    width: "28px",
    marginRight: "8px !important",
  },
}));

const TableSearch = ({ handleSearch, searchValue, handleInput }) => {
  const classes = useStyles();

  return (
    <Paper
      component="form"
      className={classes.rootWrapper}
      onSubmit={handleSearch}
    >
      <InputBase
        className={classes.searchInput}
        placeholder="Search"
        value={searchValue}
        onInput={handleInput}
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton
        type="submit"
        aria-label="search"
        className={classes.searchIcon}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default TableSearch;
