import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { theme } from '~/styles/theme';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './config/history';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
        </Router>
    </ThemeProvider>
  );
}

export default App;
