export const isDebug = localStorage.debug === '1';

export const logWithColor = (msg, color = '#ffffff', ...data) =>
  console.log(`%c${msg}`, `color: ${color}`, data);

export const debugLog = isDebug ? logWithColor : () => {};
