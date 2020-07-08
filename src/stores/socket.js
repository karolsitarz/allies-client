import MSG from 'util/msg';

const INITIAL_STATE = {
  socket: null,
  id: null,
  isLoading: false,
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
      return { ...state, socket, isLoading: true };

    case MSG.LOGIN.SUCCESS:
      const id = action.data;
      if (!id) return state;
      return { ...state, id, isLoading: false };

    case MSG.CLOSE:
      return INITIAL_STATE;

    default:
      return state;
  }
};
