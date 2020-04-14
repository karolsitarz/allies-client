const MSG = {
  CLOSE: 'SOCKET_CLOSE',
  LOGIN: {
    PROMPT: 'LOGIN_PROMPT',
    SUCCESS: 'LOGIN_SUCCESS',
  },
  ROOM: {
    CREATE: 'ROOM_CREATE',
    JOIN: 'ROOM_JOIN',
    LEAVE: 'ROOM_LEAVE',
    UPDATE: 'ROOM_UPDATE',
  },
  GAME: {
    START: 'GAME_START',
    STAGE: {
      MAFIA: 'MAFIA',
      DAY: 'DAY',
      NIGHT: 'NIGHT',
    },
    STATE: {
      START: 'START',
      VOTE: 'VOTE',
      VOTED: 'VOTED',
      UNVOTED: 'UNVOTED',
      END: 'END',
    },
  },
};

export default MSG;
