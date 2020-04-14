import React from 'react';

import Route from 'components/Route';
import { ROUTES } from 'stores/route';
import Login from './Login';
import Main from './Main';
import Room from './Room';
import Sleep from './Sleep';
import GameStart from './GameStart';
import Vote from './Vote';
import NightEnd from './NightEnd';

const App = () => {
  return (
    <>
      <Route to={Login} from={ROUTES.LOGIN} />
      <Route to={Main} from={ROUTES.MAIN} />
      <Route to={Room} from={ROUTES.ROOM.LOBBY} />
      <Route to={GameStart} from={ROUTES.GAME.START} />
      <Route to={Sleep} from={ROUTES.GAME.SLEEP} />
      <Route to={Vote} from={ROUTES.GAME.VOTE} />
      <Route to={NightEnd} from={ROUTES.GAME.NIGHT.END} />
    </>
  );
};

export default App;
