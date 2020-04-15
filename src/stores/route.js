import MSG from 'util/msg';
const { CLOSE, LOGIN, ROOM, GAME } = MSG;

export const ROUTES = {
  LOGIN: 'LOGIN',
  MAIN: 'MAIN',
  ROOM: {
    JOIN: 'ROOM_JOIN',
    CREATE: 'ROOM_CREATE',
    LOBBY: 'ROOM_LOBBY',
  },
  GAME: {
    START: 'GAME_START',
    END: 'GAME_END',
    SLEEP: 'GAME_SLEEP',
    VOTE: 'GAME_VOTE',
    SUMMARY: 'GAME_SUMMARY',
    REVEAL: 'GAME_REVEAL',
  },
};

const INITIAL_STATE = ROUTES.LOGIN;
export const ROUTE_SET = 'ROUTE_SET';

export const setRoute = (route) => ({
  type: ROUTE_SET,
  route,
});

export const routeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ROUTE_SET:
      if (!action.route) return state;
      return action.route;

    case LOGIN.SUCCESS:
      return ROUTES.MAIN;

    case ROOM.JOIN:
      return ROUTES.ROOM.LOBBY;

    case ROOM.LEAVE:
      return ROUTES.MAIN;

    case GAME.START:
      return ROUTES.GAME.START;

    case GAME.SLEEP:
      return ROUTES.GAME.SLEEP;

    case GAME.WAKE:
      return ROUTES.GAME.VOTE;

    case GAME.SUMMARY:
      return ROUTES.GAME.SUMMARY;

    case GAME.REVEAL:
      return ROUTES.GAME.REVEAL;

    case GAME.END:
      return ROUTES.GAME.END;

    case CLOSE:
      return INITIAL_STATE;

    default:
      return state;
  }
};
