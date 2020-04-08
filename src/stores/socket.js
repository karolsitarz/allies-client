const INITIAL_STATE = null;
export const SOCKET_SET = 'SOCKET_SET';

export const setSocket = (socket) => ({
  type: SOCKET_SET,
  socket,
});

export const socketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SOCKET_SET:
      if (!action.socket) return state;
      return action.socket;
    default:
      return state;
  }
};
