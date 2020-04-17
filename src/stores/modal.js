import MSG from 'util/msg';

const INITIAL_STATE = [];
const MODAL_CLOSE = 'MODAL_CLOSE';

export const closeModal = (id) => ({
  type: MODAL_CLOSE,
  id,
});

export const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MSG.INFO: {
      const { message = '', confirm = 'OK' } = action.data;
      const id = new Date().getTime();
      return [...state, { message, confirm, id }];
    }

    case MODAL_CLOSE: {
      const modalID = action.id;
      return state.filter(({ id }) => id !== modalID);
    }

    default:
      return state;
  }
};
