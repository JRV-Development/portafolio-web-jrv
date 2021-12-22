import React from "react";
import AppRouter from "./routers/AppRouter";
// import { ThemeProvider } from "@mui/material";
// import StyleTheme from "./components/assets/theme";

function App() {
  return (
    //<ThemeProvider theme={StyleTheme}>
    <>
      {/* <Navbar /> */}
      <AppRouter />
    </>
    // </ThemeProvider>
  );
}

export default App;
