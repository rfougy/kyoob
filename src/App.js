import React from "react";
import Header from "./components/Header";
import HomePage from "./components/3DComponents/HomePage/HomePage";

import theme from "./theme";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
