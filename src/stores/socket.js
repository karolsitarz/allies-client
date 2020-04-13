import MSG from 'util/msg';

const INITIAL_STATE = {
  socket: null,
  id: null,
};
export const SOCKET_SET = 'SOCKET_SET';

export const setSocket = (socket) => ({
  type: SOCKET_SET,
  socket,
});

export const socketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SOCKET_SET:
      const { socket } = action;
      if (!socket) return state;
      return { ...state, socket };
    case MSG.LOGIN.SUCCESS:
      const id = action.data;
      if (!id) return state;
      return { ...state, id };
    default:
      return state;
  }
};
