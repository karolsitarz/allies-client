import { useDispatch, useSelector } from 'react-redux';

import { setSocket } from 'stores/socket';
import socketSetup from './socketSetup';
import { isDebug, debugLog } from 'util/debug';
import MSG from 'util/msg';
import pingLoop from './pingLoop';

const IP = process.env.IP || '127.0.0.1';
const PORT = process.env.PORT || 443;

const useSocket = () => {
  const dispatch = useDispatch();
  const sc = useSelector((state) => state.socket.socket);

  const openSocket = () =>
    new Promise((res, rej) => {
      if (sc) return rej('Socket already exists.');

      const socket = new WebSocket(`ws://${IP}:${PORT}`);
      socketSetup(socket, dispatch);
      pingLoop(socket);
      dispatch(setSocket(socket));

      debugLog('socket connecting...');
      window.ws_debug = isDebug && socket;

      socket.onopen = () => {
        debugLog('socket connected!');
        return res(socket);
      };

      socket.onclose = () => {
        debugLog('socket closed!');
        dispatch({ type: MSG.CLOSE });
      };
    });

  return [sc, openSocket];
};

export default useSocket;
