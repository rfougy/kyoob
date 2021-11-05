import React from "react";
import Header from "./components/Header";
import HomePage from "./components/3DComponents/HomePage/HomePage";
import { themeLight, themeDark } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [mode, setMode] = React.useState(true);
  const changeMode = () => {
    setMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={mode ? themeLight : themeDark}>
      <CssBaseline />
      <HomePage />
      <Header changeMode={changeMode} mode={mode} />
    </ThemeProvider>
  );
}

export default App;
