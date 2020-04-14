import MSG from 'util/msg';
const { GAME } = MSG;

const INITIAL_STATE = {
  role: null,
  players: null,
  isVoteValid: false,
  isKilled: false,
  killedList: null,
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

    case GAME.ROLE.START: {
      const players = action.data;
      return { ...state, players };
    }

    case GAME.ROLE.VOTE: {
      return { ...state, ...action.data };
    }

    case GAME.NIGHT.END: {
      return { ...state, ...action.data };
    }

    default:
      return state;
  }
};
