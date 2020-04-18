import MSG from 'util/msg';
const { GAME } = MSG;

const INITIAL_STATE = {
  players: [],
  isVoteValid: false,
  voteMessage: '',
  tally: [],
  isKilled: false,
  killed: [],
  gameEnd: null,
};

export const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GAME.START: {
      const players = action.data;
      return { ...state, players };
    }

    case GAME.SLEEP: {
      const players = state.players.map((player) => ({ ...player, voted: [] }));
      return { ...state, players, tally: [] };
    }

    case GAME.WAKE: {
      const message = action.data;
      return { ...state, voteMessage: message };
    }

    case GAME.VOTE: {
      const { isVoteValid, voted, tally } = action.data;
      const players = state.players.map((player, i) => ({
        ...player,
        voted: voted[i],
      }));
      return { ...state, players, isVoteValid, tally };
    }

    case GAME.SUMMARY: {
      const { isKilled, killed } = action.data;
      const players = state.players.map((player) => ({
        ...player,
        isDead: player.isDead || killed.includes(player.id),
      }));
      return { ...state, players, isKilled, killed };
    }

    case GAME.REVEAL: {
      const { id, role } = action.data;
      const players = state.players.map((player) => ({
        ...player,
        role: player.role || (player.id === id && role),
        isDead: player.isDead || player.id === id,
      }));
      return { ...state, killed: [id], players };
    }

    case GAME.END: {
      return { ...state, gameEnd: action.data };
    }

    default:
      return state;
  }
};
