import React from 'react';

import Route from 'components/Route';
import { ROUTES } from 'stores/route';
import Login from './Login';
import Loading from './Loading';

const App = () => {
  return (
    <>
      <Route to={Loading} from={ROUTES.LOADING} />
      <Route to={Login} from={ROUTES.LOGIN} />
    </>
  );
};

export default App;
