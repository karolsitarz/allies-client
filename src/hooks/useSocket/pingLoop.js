import MSG from 'util/msg';

const COMPLETE = 'COMPLETE';
const AWAIT = 'AWAIT';
const PENDING = 'PENDING';
const PING_INTERVAL = 40000;
const PING_TIMEOUT = 10000;

export default (socket) => {
  socket.ping = {
    lastPing: null,
    state: COMPLETE, // pending, complete, await
    timeout: null,
  };

  const loop = () => {
    if (socket.ping.state !== COMPLETE) {
      socket.close();
      return;
    }

    socket.ping.state = AWAIT;
    socket.ping.timeout = window.setTimeout(() => {
      socket.ping.lastPing = new Date() * 1;
      socket.comm(MSG.CONNECTION.PING, socket.ping.lastPing);
      socket.ping.state = PENDING;
      socket.ping.timeout = window.setTimeout(() => loop(), PING_TIMEOUT);
    }, PING_INTERVAL);
  };
  loop();
};

export const receivePong = (socket, ping) => {
  if (ping !== socket.ping.lastPing) return;
  socket.ping.state = COMPLETE;
};
