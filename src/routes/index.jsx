import React from 'react';

import Route from 'components/Route';
import { ROUTES } from 'stores/route';
import Login from './Login';
import Main from './Main';
import Room from './Room';
import Sleep from './Sleep';
import GameStart from './GameStart';
import Vote from './Vote';
import Summary from './Summary';

const App = () => {
  return (
    <>
      <Route to={Login} from={ROUTES.LOGIN} />
      <Route to={Main} from={ROUTES.MAIN} />
      <Route to={Room} from={ROUTES.ROOM.LOBBY} />
      <Route to={GameStart} from={ROUTES.GAME.START} />
      <Route to={Sleep} from={ROUTES.GAME.SLEEP} />
      <Route to={Vote} from={ROUTES.GAME.VOTE} />
      <Route to={Summary} from={ROUTES.GAME.SUMMARY} />
    </>
  );
};

export default App;
