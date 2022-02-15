import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#385CAD",
    },
    secondary: {
      main: "#FFFFFF",
    },
    table: {
      header:  '#DCDCDC'
    },
    mapping: {
      headers: '#DCDCDC',
      border:  grey[600]
    }
  },
});

export default function ThemeWrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
