import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import store from 'stores';
import App from 'App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('container')
);

// serviceWorker.unregister();
