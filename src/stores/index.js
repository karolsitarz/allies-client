import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { socketReducer as socket } from './socket';
import { routeReducer as route } from './route';
import { roomReducer as room } from './room';
import { gameReducer as game } from './game';

const reducer = combineReducers({ socket, route, room, game });

export default createStore(reducer, composeWithDevTools());
