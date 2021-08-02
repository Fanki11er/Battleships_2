import { createContext, useContext, useEffect, useState } from 'react';
import { Coordinates } from '../Class/BattleShip';
import { Shot, ShotResult } from '../Types/types';
import { SocketContext } from './socketProvider';

export const GameContext = createContext({
  shots: [] as ShotResult[],
  handleShot: (coordinates: Coordinates) => {},
});

const GameProvider = (props: React.PropsWithChildren<React.ReactNode>) => {
  const { children } = props;
  const [shots, setShots] = useState<ShotResult[]>([]);
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket?.on('shotResult', (shots: ShotResult[]) => {
      setShots(shots);
    });
  });
  const handleShot = (coordinates: Coordinates) => {
    socket?.emit('shot', { coordinates, userId: socket.id } as Shot);
  };

  const gameContext = {
    shots,
    handleShot,
  };

  return <GameContext.Provider value={gameContext}>{children}</GameContext.Provider>;
};

export default GameProvider;
