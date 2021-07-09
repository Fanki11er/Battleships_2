import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const useSocket = (url: string) => {
  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  useEffect(() => {
    setSocket(io(url));
  }, [url]);

  return socket;
};

export default useSocket;
