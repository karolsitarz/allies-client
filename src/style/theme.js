const baseTheme = {
  transition: ({
    duration = 0.2,
    easing = 'ease',
    properties = ['opacity', 'transform'],
    delay = '0',
  } = {}) =>
    properties
      .map((property) => `${property} ${duration}s ${easing} ${delay}s`)
      .toString(),
};

const light = {
  ...baseTheme,
  main: {
    1: '#333333',
    2: `#555555`,
  },
  gradient: {
    primary: 'linear-gradient(to bottom right, #667eea 0%, #764ba2 100%)',
    light: 'linear-gradient(to bottom right, #d2d9f9 0%, #d6c7e5 100%)',
    start: '#667eea',
    mid: '#6e65c6',
    end: '#764ba2',
  },
  base: '#eeeeee',
  alpha: {
    1: '#00000011',
    2: '#00000022',
    3: '#00000033',
    4: '#00000044',
  },
};

const dark = {
  ...baseTheme,
  main: {
    1: '#cccccc',
    2: `#aaaaaa`,
  },
  gradient: {
    primary: 'linear-gradient(to bottom right, #6377cf 0%, #694f82 100%)',
    light: 'linear-gradient(to bottom right, #4b5271 0%, #4c3b5f 100%)',
    start: '#6377cf',
    mid: '#6663A9',
    end: '#694f82',
  },
  base: '#222222',
  alpha: {
    1: '#00000022',
    2: '#00000033',
    3: '#00000044',
    4: '#00000055',
  },
};

const getTheme = (isDark = true) => (isDark ? dark : light);

export default getTheme;
