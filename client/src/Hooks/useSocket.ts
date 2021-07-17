import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const useSocket = () => {
  const URL = 'http://localhost:8090';
  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  useEffect(() => {
    setSocket(io(URL));
  }, [URL]);

  return socket;
};

export default useSocket;
