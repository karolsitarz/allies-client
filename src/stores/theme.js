const INITIAL_STATE = true;
const THEME_TOGGLE = 'THEME_TOGGLE';

export const toggleTheme = { type: THEME_TOGGLE };

export const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case THEME_TOGGLE:
      return !state;

    default:
      return state;
  }
};
