import React from 'react';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';

import store from 'stores';
import GlobalStyles, { theme } from './style';
import App from 'routes';
// import * as serviceWorker from './serviceWorker';

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <Main>
        <App />
      </Main>
    </Provider>
  </ThemeProvider>,
  document.getElementById('container')
);

// serviceWorker.unregister();
