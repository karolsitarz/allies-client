import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Grommet, Main } from 'grommet';

import store from 'stores';
import GlobalStyles, { theme } from './style';
import App from 'routes';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Grommet theme={theme} full>
    <GlobalStyles />
    <Provider store={store}>
      <Main>
        <App />
      </Main>
    </Provider>
  </Grommet>,
  document.getElementById('container')
);

// serviceWorker.unregister();
