import React from 'react';

import Route from 'components/Route';
import { ROUTES } from 'stores/route';
import Login from './Login';
import Main from './Main';

const App = () => {
  return (
    <>
      <Route to={Login} from={ROUTES.LOGIN} />
      <Route to={Main} from={ROUTES.MAIN} />
    </>
  );
};

export default App;
