import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const useSocket = () => {
  const URL = '192.168.10.101:8090';
  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  useEffect(() => {
    setSocket(io(URL));
  }, [URL]);

  return socket;
};

export default useSocket;
