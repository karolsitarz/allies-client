import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import store from 'stores';
import GlobalStyles from 'components/GlobalStyles';
import App from 'routes'
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('container')
);

// serviceWorker.unregister();
