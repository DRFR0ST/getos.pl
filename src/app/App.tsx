import React, { useState } from 'react';
import Routes from "./Routes";
import { AppBar } from "components";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core"
import LitteraProvider from "react-littera"
import theme from "theme";

function App() {
  const [locale, setLocale] = useState("pl_PL");
  
  return (
    <LitteraProvider language={locale} setLanguage={setLocale}>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <AppBar />
            <Routes />
          </div>
        </Router>
      </ThemeProvider>
    </LitteraProvider>
  );
}

export default App;
