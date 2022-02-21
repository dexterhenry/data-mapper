import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import { styled } from "@mui/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderRadius: 0,
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.table.header,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function createData(structure, occurrence) {
  return {
    structure,
    occurrence,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" align="left">
          {row.structure}
        </TableCell>
        <TableCell align="right">{row.occurrence}</TableCell>
      </TableRow>

      <Collapse in={open} timeout="auto" unmountOnExit>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
        </TableCell>
        <TableCell component="th" align="left">
          {row.structure}
        </TableCell>
        <TableCell align="right">{row.occurrence}</TableCell>
      </TableRow>
      </Collapse>
    </>
  );
}

const rows = [
  createData("field", "1:1"),
  createData("field", "1:2"),
  createData("field", "0:0"),
];

export default function SourceTable() {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: "0" }}>
      <Table
        size="small"
        aria-label="collapsible table"
        sx={{ borderRadius: "0" }}
      >
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={2}>Structure</StyledTableCell>
            <StyledTableCell align="right">Occurrence</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.occurrence} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
