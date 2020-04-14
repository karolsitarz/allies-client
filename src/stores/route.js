import MSG from 'util/msg';

export const ROUTES = {
  LOGIN: 'LOGIN',
  MAIN: 'MAIN',
  ROOM: {
    JOIN: 'ROOM_JOIN',
    CREATE: 'ROOM_CREATE',
    LOBBY: 'ROOM_LOBBY',
  },
};

const INITIAL_STATE = {
  route: ROUTES.LOGIN,
  data: null,
};
export const ROUTE_SET = 'ROUTE_SET';

export const setRoute = (route, data) => ({
  type: ROUTE_SET,
  route,
  data,
});

export const routeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case ROUTE_SET:
    //   if (!action.route) return state;
    //   const { route, data } = action;
    //   return { route, data };

    case MSG.LOGIN.SUCCESS:
      return {
        ...state,
        route: ROUTES.MAIN,
      };

    case MSG.ROOM.JOIN:
      const id = action.data;
      if (!id) return state;

      return {
        route: ROUTES.ROOM.LOBBY,
        data: {
          ...state.data,
          id,
        },
      };

    case MSG.ROOM.LEAVE:
      return { ...state, route: ROUTES.MAIN };

    case MSG.ROOM.UPDATE:
      const players = action.data;
      if (!players) return state;

      return {
        ...state,
        data: {
          ...state.data,
          players,
        },
      };

    case MSG.CLOSE:
      return INITIAL_STATE;

    default:
      return state;
  }
};
