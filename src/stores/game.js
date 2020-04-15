import MSG from 'util/msg';
const { GAME } = MSG;

const INITIAL_STATE = {
  role: null,
  players: null,
  isVoteValid: false,
  isKilled: false,
  killedList: null,
  reveal: {
    name: null,
    role: null,
  },
  gameEnd: null,
};

export const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GAME.START: {
      const role = action.data;
      return { ...state, role };
    }

    case GAME.SLEEP: {
      return { ...state, players: null };
    }

    case GAME.WAKE: {
      const players = action.data;
      return { ...state, players };
    }

    case GAME.VOTE: {
      return { ...state, ...action.data };
    }

    case GAME.SUMMARY: {
      return { ...state, ...action.data };
    }

    case GAME.REVEAL: {
      return { ...state, reveal: action.data };
    }

    case GAME.END: {
      return { ...state, gameEnd: action.data };
    }

    default:
      return state;
  }
};
