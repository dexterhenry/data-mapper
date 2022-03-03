import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function ResultsTable({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="results table">
        <TableHead>
          <TableRow>
            <TableCell>Source</TableCell>
            <TableCell>Target</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={`${row.sourceItem}-${row.targetItem}-${index} `}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.sourceItem}</TableCell>
              <TableCell>{row.targetItem}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
