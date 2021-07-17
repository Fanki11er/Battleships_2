import { createContext, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

export const SocketContext = createContext({
  socket: undefined as Socket | undefined,
});

const SocketProvider = (props: React.PropsWithChildren<React.ReactNode>) => {
  const { children } = props;

  const URL = 'http://localhost:8090';
  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  useEffect(() => {
    setSocket(io(URL));
  }, [URL]);

  const socketContext = {
    socket,
  };

  return <SocketContext.Provider value={socketContext}>{children}</SocketContext.Provider>;
};

export default SocketProvider;
