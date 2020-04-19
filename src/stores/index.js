import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { socketReducer as socket } from './socket';
import { routeReducer as route } from './route';
import { roomReducer as room } from './room';
import { gameReducer as game } from './game';
import { modalReducer as modal } from './modal';
import { themeReducer as theme } from './theme';

const reducer = combineReducers({ socket, route, room, game, theme, modal });

export default createStore(reducer, composeWithDevTools());
