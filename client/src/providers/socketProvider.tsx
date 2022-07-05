import { createContext, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { URL } from '../App';

export const SocketContext = createContext({
  socket: undefined as Socket | undefined,
});

const SocketProvider = (props: React.PropsWithChildren<React.ReactNode>) => {
  const { children } = props;

  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  useEffect(() => {
    setSocket(io(URL, { autoConnect: false }));
  }, []);

  const socketContext = {
    socket,
  };

  return <SocketContext.Provider value={socketContext}>{children}</SocketContext.Provider>;
};

export default SocketProvider;
