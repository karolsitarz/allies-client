import { debugLog } from './debug';

const COLOR_GREEN = '#2C7C26';
const COLOR_RED = '#C11B1B';
const DEBOUNCE_DELAY = 300;

export default (socket) => {
  // add the events object
  socket.events = {};
  socket.debounce = {};
  const { events, debounce } = socket;

  // send event
  socket.comm = (message, data) => {
    if (typeof message !== 'string') return;
    if (!debounce[message])
      debounce[message] = {
        date: 0,
        timeout: undefined,
      };

    const event = debounce[message];

    if (new Date() - event.date < DEBOUNCE_DELAY) {
      clearTimeout(event.timeout);
      event.timeout = setTimeout(socket.comm(message, data), DEBOUNCE_DELAY);
      event.date = new Date();
      return debugLog(`→ ${message}`, `${COLOR_GREEN}88`, data);
    }

    try {
      const parsed = JSON.stringify({ message, data });
      socket.send(parsed);
    } catch (e) {
      console.error('WS Sending error: ', e);
    }
    event.date = new Date();
    debugLog(`→ ${message}`, COLOR_GREEN, data);
  };

  socket.addEventListener('message', (connection) => {
    try {
      const data = JSON.parse(connection.data);
      if (!events.hasOwnProperty(data.message))
        return debugLog(`\t← ${data.message}`, `${COLOR_RED}88`, data);

      events[data.message](data.data);
      debugLog(`\t← ${data.message}`, COLOR_RED, data);
    } catch (e) {
      console.error('WS Receiving error: ', e);
    }
  });

  // add a receive listener
  socket.receive = (message, callback) => {
    if (typeof message !== 'string') return;
    if (typeof callback !== 'function') return;

    events[message] = callback;
  };
};
