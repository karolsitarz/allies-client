import MSG from 'util/msg';
const { GAME } = MSG;

const INITIAL_STATE = {
  role: null,
  players: null,
};

export const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GAME.START: {
      const role = action.data;
      return { ...state, role };
    }

    case GAME.NIGHT.START: {
      return { ...state, players: null };
    }

    default:
      return state;
  }
};
