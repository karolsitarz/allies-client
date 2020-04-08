import { useDispatch, useSelector } from 'react-redux';

import { setSocket } from 'stores/socket';
import socketSetup from 'util/socketSetup';
import { isDebug, debugLog } from 'util/debug';

const useSocket = () => {
  const sc = useSelector((state) => state.socket);
  const dispatch = useDispatch();

  const openSocket = () =>
    new Promise((res, rej) => {
      if (sc) return rej();
      const socket = new WebSocket(`ws://192.168.100.20:443`);
      socketSetup(socket);
      dispatch(setSocket(socket));
      if (isDebug) {
        debugLog('socket connecting...');
        window.ws = socket;
      }
      socket.onopen = () => {
        debugLog('socket connected!');
        return res(socket);
      };
    });

  return [sc, openSocket];
};

export default useSocket;
