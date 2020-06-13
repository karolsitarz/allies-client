const DARK = 'dark';
const LIGHT = 'light';
const DEFAULT_INITIAL_STATE = LIGHT;

const boolToTheme = (value) => value === DARK;
const themeToBool = (value) => (value ? DARK : LIGHT);

const theme = localStorage.getItem('theme');
const INITIAL_STATE = boolToTheme(
  theme === DARK || theme === LIGHT ? theme : DEFAULT_INITIAL_STATE
);

const THEME_TOGGLE = 'THEME_TOGGLE';

export const toggleTheme = { type: THEME_TOGGLE };

export const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case THEME_TOGGLE:
      localStorage.setItem('theme', themeToBool(!state));
      return !state;

    default:
      return state;
  }
};
