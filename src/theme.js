import { createTheme } from "@mui/material/styles";

export const themeLight = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
  },
});

export const themeDark = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
  },
});
