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
    case ROUTE_SET:
      if (!action.route) return state;
      const { route, data } = action;
      return { route, data };
    default:
      return state;
  }
};
