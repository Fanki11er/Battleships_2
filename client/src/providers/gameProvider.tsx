import { createContext, useContext, useEffect, useState } from 'react';
import { Coordinates } from '../Class/BattleShip';
import { Shot, ShotResult, Shots } from '../Types/types';
import { SocketContext } from './socketProvider';

export const GameContext = createContext({
  shots: {} as Shots,
  handleShot: (coordinates: Coordinates) => {},
  isMyTurn: false,
  isGameStarted: false,
  checkIfItIsMyTurn: (currentPlayer: string) => {},
});

const GameProvider = (props: React.PropsWithChildren<React.ReactNode>) => {
  const { children } = props;
  const [shots, setShots] = useState<Shots>({ myShots: [], opponentShots: [] });
  const { socket } = useContext(SocketContext);
  const [isGameStarted, setGameStarted] = useState<boolean>(false);
  const [isMyTurn, setIsMyTurn] = useState(false);

  useEffect(() => {
    socket?.once('shotResult', ({ shotResult, currentPlayer }) => {
      let newShots = Object.assign({}, { ...shots });
      currentPlayer === socket.id ? newShots.opponentShots.push(shotResult) : newShots.myShots.push(shotResult);
      setShots(newShots);
      checkIfItIsMyTurn(currentPlayer as string);
    });
  }, [shots, socket]);

  useEffect(() => {
    socket?.once('Winner', () => {
      console.log('Winner');
    });
  }, [socket]);

  useEffect(() => {
    socket?.on('startGame', (currentPlayer) => {
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
    checkIfItIsMyTurn,
  };

  return <GameContext.Provider value={gameContext}>{children}</GameContext.Provider>;
};

export default GameProvider;
