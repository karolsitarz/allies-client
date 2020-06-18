import MSG from 'util/msg';
const { ROOM } = MSG;

const INITIAL_STATE = {
  auto: true,
  killer: 1,
  doctor: 0,
  cop: 0,
  nitwit: 0,
  cabby: 0,
  sniper: 0,
};

export const settingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ROOM.LEAVE:
      return INITIAL_STATE;

    case ROOM.SETTINGS.RECEIVE: {
      return { ...state, ...action.data };
    }

    default:
      return state;
  }
};
