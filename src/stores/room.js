import MSG from 'util/msg';
const { ROOM } = MSG;

const INITIAL_STATE = {
  id: null,
  players: [],
  isLoading: false,
};

export const LOADING_SET = 'LOADING_SET';

export const setLoading = (isLoading) => ({
  type: LOADING_SET,
  isLoading,
});

export const roomReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ROOM.JOIN: {
      const id = action.data;
      if (!id) return state;

      return { ...state, id };
    }

    case ROOM.LEAVE: {
      return { INITIAL_STATE };
    }

    case ROOM.UPDATE: {
      const players = action.data;
      if (!players) return state;

      return { ...state, players };
    }

    case LOADING_SET: {
      const isLoading = action.isLoading;
      return { ...state, isLoading };
    }

    default:
      return state;
  }
};
