const MSG = {
  CLOSE: 'SOCKET_CLOSE',
  INFO: 'INFO_MODAL',
  LOGIN: {
    PROMPT: 'LOGIN_PROMPT',
    SUCCESS: 'LOGIN_SUCCESS',
  },
  ROOM: {
    CREATE: 'ROOM_CREATE',
    JOIN: 'ROOM_JOIN',
    LEAVE: 'ROOM_LEAVE',
    UPDATE: 'ROOM_UPDATE',
    READY: 'ROOM_READY',
    SETTINGS: {
      OPEN: 'ROOM_SETTINGS_OPEN',
      CLOSE: 'ROOM_SETTINGS_CLOSE',
      SEND: 'ROOM_SETTINGS_SEND',
      RECEIVE: 'ROOM_SETTINGS_RECEIVE',
    },
  },
  GAME: {
    START: 'GAME_START',
    END: 'GAME_END',
    WAKE: 'GAME_WAKE',
    SLEEP: 'GAME_SLEEP',
    VOTE: 'GAME_VOTE',
    SUMMARY: 'GAME_SUMMARY',
    REVEAL: 'GAME_REVEAL',
  },
  SOUND: {
    WAKE: 'SOUND_WAKE',
    SLEEP: 'SOUND_SLEEP',
  },
  CONNECTION: {
    PING: 'CONNECTION_PING',
    PONG: 'CONNECTION_PONG',
  },
};

export default MSG;
