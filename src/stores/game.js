import MSG from 'util/msg';
const { GAME } = MSG;

const INITIAL_STATE = {
  role: null,
  players: [],
  isVoteValid: false,
  voteMessage: '',
  isKilled: false,
  killedList: [],
  reveal: {
    name: null,
    emoji: null,
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
      const { players, message } = action.data;
      return { ...state, players, voteMessage: message };
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
