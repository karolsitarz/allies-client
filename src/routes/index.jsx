import React from 'react';

import Route from 'components/Route';
import { ROUTES } from 'stores/route';
import Login from './Login';
import Main from './Main';
import Room from './Room';

const App = () => {
  return (
    <>
      <Route to={Login} from={ROUTES.LOGIN} />
      <Route to={Main} from={ROUTES.MAIN} />
      <Route to={Room} from={ROUTES.ROOM.LOBBY} />
    </>
  );
};

export default App;
