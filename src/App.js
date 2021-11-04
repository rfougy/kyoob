import React from "react";
import Header from "./components/Header";
import HomePage from "./components/3DComponents/HomePage/HomePage";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
      <Header />
    </ThemeProvider>
  );
}

export default App;
