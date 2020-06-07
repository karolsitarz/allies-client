import MSG from 'util/msg';
const { GAME, ROOM } = MSG;

const INITIAL_STATE = {
  players: [],
  isVoteValid: false,
  voteMessage: '',
  tally: [],
  isKilled: false,
  killed: [],
  endResult: null,
};

export const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ROOM.JOIN:
      return INITIAL_STATE;

    case GAME.START: {
      const players = action.data;
      return { ...INITIAL_STATE, players };
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
      const players = state.players.map((player) => ({
        ...player,
        voted: voted[player.id] || [],
      }));
      return { ...state, players, isVoteValid, tally };
    }

    case GAME.SUMMARY: {
      const { isKilled, killed, players: players_roles } = action.data;
      const players = state.players.map((player) => ({
        ...player,
        role: player.role || (isKilled && players_roles[player.id]),
        isDead: player.isDead || killed.includes(player.id),
      }));
      return { ...state, players, isKilled, killed };
    }

    case GAME.REVEAL: {
      const { id, role } = action.data;
      if (!id) {
        return { ...state, killed: [] };
      }

      const players = state.players.map((player) => ({
        ...player,
        role: player.role || (player.id === id && role),
        isDead: player.isDead || player.id === id,
      }));
      return { ...state, killed: [id], players };
    }

    case GAME.END: {
      return { ...state, endResult: action.data };
    }

    default:
      return state;
  }
};
