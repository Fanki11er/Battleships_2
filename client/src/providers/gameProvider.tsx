import { createContext, useContext, useEffect, useState } from 'react';
import { Coordinates } from '../Class/BattleShip';
import { Shot, ShotResult } from '../Types/types';
import { SocketContext } from './socketProvider';

export const GameContext = createContext({
  shots: [] as ShotResult[],
  handleShot: (coordinates: Coordinates) => {},
  isMyTurn: false,
  isGameStarted: false,
});

const GameProvider = (props: React.PropsWithChildren<React.ReactNode>) => {
  const { children } = props;
  const [shots, setShots] = useState<ShotResult[]>([]);
  const { socket } = useContext(SocketContext);
  const [isGameStarted, setGameStarted] = useState<boolean>(false);
  const [isMyTurn, setIsMyTurn] = useState(false);

  useEffect(() => {
    socket?.on('shotResult', ({ shots, currentPlayer }) => {
      setShots(shots as ShotResult[]);
      checkIfItIsMyTurn(currentPlayer as string);
    });
  });

  useEffect(() => {
    socket?.once('startGame', (currentPlayer) => {
      setGameStarted(true);
      checkIfItIsMyTurn(currentPlayer as string);
    });
  });
  const handleShot = (coordinates: Coordinates) => {
    socket?.emit('shot', { coordinates, userId: socket.id } as Shot);
  };

  const checkIfItIsMyTurn = (currentTurnId: string) => {
    if (currentTurnId === socket?.id) {
      setIsMyTurn(true);
    } else {
      setIsMyTurn(false);
    }
  };

  const gameContext = {
    shots,
    handleShot,
    isMyTurn,
    isGameStarted,
  };

  return <GameContext.Provider value={gameContext}>{children}</GameContext.Provider>;
};

export default GameProvider;
