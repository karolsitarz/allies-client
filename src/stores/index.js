import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { socketReducer as socket } from './socket';
import { routeReducer as route } from './route';

const reducer = combineReducers({ socket, route });

export default createStore(reducer, composeWithDevTools());
