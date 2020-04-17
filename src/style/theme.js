const mainTheme = {
  main: {
    1: '#333333',
    2: `#555555`,
    3: `#666666`,
    4: `#868686`,
    5: '#999999',
  },
  gradient: {
    primary: 'linear-gradient(to bottom right, #667eea 0%, #764ba2 100%)',
    light: 'linear-gradient(to bottom right, #d2d9f9 0%, #d6c7e5 100%)',
    start: '#667eea',
    end: '#764ba2',
  },
  base: {
    1: '#ffffff',
    2: '#f7f7f7',
  },
  alpha: {
    1: '#00000011',
    2: '#00000022',
    3: '#00000033',
    4: '#00000044',
  },

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

export default mainTheme;
