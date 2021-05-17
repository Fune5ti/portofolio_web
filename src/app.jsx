import React from "react";
import { useSelector } from "react-redux";
import { I18nextProvider } from "react-i18next";
import Routes from "./routes/index";
import GlobalStyle from "./theme/globalStyles";
import i18n from "./i18n";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <GlobalStyle />
        <Routes />
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
