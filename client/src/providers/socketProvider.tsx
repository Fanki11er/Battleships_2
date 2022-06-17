import { createContext, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

export const SocketContext = createContext({
  socket: undefined as Socket | undefined,
});

const SocketProvider = (props: React.PropsWithChildren<React.ReactNode>) => {
  const { children } = props;

  const URL = 'http://192.168.10.101:8090';
  //const URL = 'http://192.168.1.129:8090';

  //const URL = 'https://kdz-battleships-server.herokuapp.com/' || 'https//localhost:8090';

  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  useEffect(() => {
    setSocket(io(URL, { autoConnect: false }));
  }, [URL]);

  const socketContext = {
    socket,
  };

  return <SocketContext.Provider value={socketContext}>{children}</SocketContext.Provider>;
};

export default SocketProvider;
