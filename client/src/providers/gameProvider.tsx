import { createContext, useContext, useEffect, useState } from 'react';
import { Shot } from '../Types/types';
import { SocketContext } from './socketProvider';

export const GameContext = createContext({
  shots: [] as Shot[],
});

const GameProvider = (props: React.PropsWithChildren<React.ReactNode>) => {
  const { children } = props;
  const [shots, setShots] = useState<Shot[]>([]);
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket?.on('shot', (shots: Shot[]) => {
      setShots(shots);
    });
  });

  const gameContext = {
    shots,
  };

  return <GameContext.Provider value={gameContext}>{children}</GameContext.Provider>;
};

export default GameProvider;
