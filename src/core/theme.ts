import { ThemeOptions } from "@mui/material";

export const theme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#047065",
    },
    secondary: {
      main: "#D3E0E1",
    },
    error: {
      main: "#EF4444",
    },
    warning: {
      main: "#F59E0B",
    },
    info: {
      main: "#0EA5E9",
    },
    success: {
      main: "#22C55E",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#047065",
          color: "#FFFFFF",
        },
      },
    },
  },
};
