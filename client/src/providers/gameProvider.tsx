import { createContext, useContext, useEffect, useState } from 'react';
import { Coordinates } from '../Class/BattleShip';
import { Result, Shot, ShotResult, Shots } from '../Types/types';
import { SocketContext } from './socketProvider';

export const GameContext = createContext({
  myShots: [] as ShotResult[],
  opponentShots: [] as ShotResult[],
  handleShot: (coordinates: Coordinates) => {},
  isMyTurn: false,
  isGameStarted: false,
  checkIfItIsMyTurn: (currentPlayer: string) => {},
  winner: '',
});

const GameProvider = (props: React.PropsWithChildren<React.ReactNode>) => {
  const { children } = props;
  //const [shots, setShots] = useState<Shots>({ myShots: [], opponentShots: [] });
  const [myShots, setShots] = useState<ShotResult[]>([]);
  const [opponentShots, setOpponentShots] = useState<ShotResult[]>([]);
  const { socket } = useContext(SocketContext);
  const [isGameStarted, setGameStarted] = useState<boolean>(false);
  const [isMyTurn, setIsMyTurn] = useState(false);
  const [winner, setWinner] = useState('');

  useEffect(() => {
    socket?.once('shotResult', (result: Result) => {
      const { shotResult, currentPlayer } = result;
      if (shotResult.userId === socket.id) {
        setShots([...myShots, shotResult]);
      } else {
        setOpponentShots([...opponentShots, shotResult]);
      }

      checkIfItIsMyTurn(currentPlayer as string);
    });
  }, [myShots, opponentShots, socket]);

  /*useEffect(() => {
    socket?.once('shotResult', ({ shotResult, currentPlayer }) => {
      let newShots = Object.assign({}, { ...shots });
      currentPlayer === socket.id ? newShots.opponentShots.push(shotResult) : newShots.myShots.push(shotResult);
      setShots(newShots);
      checkIfItIsMyTurn(currentPlayer as string);
    });
  }, [shots, socket]);*/

  useEffect(() => {
    socket?.once('Winner', (winner) => {
      setWinner(winner);
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
    myShots,
    opponentShots,
    handleShot,
    isMyTurn,
    isGameStarted,
    checkIfItIsMyTurn,
    winner,
  };

  return <GameContext.Provider value={gameContext}>{children}</GameContext.Provider>;
};

export default GameProvider;
