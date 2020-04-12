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
    1: '#00000007',
    2: '#00000014',
    3: '#00000021',
    4: '#00000028',
  },

  transition: (props = {}) => {
    const duration = props.duration || '0.3';
    const easing = props.easing || 'ease';
    const properties = props.properties || ['opacity', 'transform'];
    const delay = props.delay || '0';

    return properties
      .map((property) => `${property} ${duration}s ${easing} ${delay}s`)
      .toString();
  },
};

export default mainTheme;
