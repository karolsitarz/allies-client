import React from 'react';

import { ROUTES } from 'stores/route';
import Route from 'components/Route';
import Login from './Login';
import Main from './Main';
import Room from './Room';
import Sleep from './Sleep';
import GameSettings from './GameSettings';
import GameStart from './GameStart';
import Vote from './Vote';
import Summary from './Summary';
import Reveal from './Reveal';
import EndResult from './EndResult';

const Routes = () => (
  <>
    <Route to={Login} from={ROUTES.LOGIN} />
    <Route to={Main} from={ROUTES.MAIN} />

    <Route to={Room} from={ROUTES.ROOM.LOBBY} />
    <Route to={GameSettings} from={ROUTES.ROOM.SETTINGS} />

    <Route to={GameStart} from={ROUTES.GAME.START} />
    <Route to={Sleep} from={ROUTES.GAME.SLEEP} />
    <Route to={Vote} from={ROUTES.GAME.VOTE} />
    <Route to={Summary} from={ROUTES.GAME.SUMMARY} />
    <Route to={Reveal} from={ROUTES.GAME.REVEAL} />
    <Route to={EndResult} from={ROUTES.GAME.END} />
  </>
);

export default Routes;
