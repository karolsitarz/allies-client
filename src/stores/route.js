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
    SLEEP: 'GAME_SLEEP',
    VOTE: 'GAME_VOTE',
    NIGHT: {
      END: 'GAME_NIGHT_END',
    },
    DAY: {
      END: 'GAME_DAY_END',
    },
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

    case GAME.NIGHT.START:
      return ROUTES.GAME.SLEEP;

    case GAME.ROLE.START:
      return ROUTES.GAME.VOTE;

    case GAME.NIGHT.END:
      return ROUTES.GAME.NIGHT.END;

    case CLOSE:
      return INITIAL_STATE;

    default:
      return state;
  }
};
