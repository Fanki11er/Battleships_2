import { createContext, useContext, useEffect, useState } from 'react';
import { Coordinates } from '../Class/BattleShip';
import { ShipListCreator, shipsList } from '../Data/shipsList';
import { Result, shipsLeftListElement, Shot, ShotResult } from '../Types/types';
import { SocketContext } from './socketProvider';
import { v4 as uuid } from 'uuid';

export const GameContext = createContext({
  myShots: [] as ShotResult[],
  opponentShots: [] as ShotResult[],
  myShipsList: [] as shipsLeftListElement[],
  opponentShipsList: [] as shipsLeftListElement[],
  handleShot: (coordinates: Coordinates) => {},
  isMyTurn: false,
  isGameStarted: false,
  checkIfItIsMyTurn: (currentPlayer: string) => {},
  handleSunkShip: (userId: string, size: number) => {},
  winner: '',
});

const GameProvider = (props: React.PropsWithChildren<React.ReactNode>) => {
  const { children } = props;
  const [myShots, setShots] = useState<ShotResult[]>([]);
  const [opponentShots, setOpponentShots] = useState<ShotResult[]>([]);
  const [myShipsList, setMyShipsList] = useState<shipsLeftListElement[]>([]);
  const [opponentShipsList, setOpponentShipsList] = useState<shipsLeftListElement[]>([]);
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

  useEffect(() => {
    socket?.on('Winner', (winner) => {
      setWinner(winner);
    });

    return () => {
      socket?.off('Winner');
    };
  }, [socket]);

  useEffect(() => {
    socket?.once('startGame', (currentPlayer) => {
      setGameStarted(true);
      checkIfItIsMyTurn(currentPlayer as string);
    });
  });

  useEffect(() => {
    socket?.on('GameEnded', () => {
      setGameStarted(false);
      setShots([]);
      setOpponentShots([]);
      setIsMyTurn(false);
      setWinner('');
      createShipsLists(shipsList);
    });
    return () => {
      socket?.off('GameEnded');
    };
  }, [socket]);
  const handleShot = (coordinates: Coordinates) => {
    socket?.emit('shot', { coordinates, userId: socket.id } as Shot);
  };

  useEffect(() => {
    createShipsLists(shipsList);
  }, []);

  const checkIfItIsMyTurn = (currentTurnId: string) => {
    if (currentTurnId === socket?.id) {
      setIsMyTurn(true);
    } else {
      setIsMyTurn(false);
    }
  };

  const createShipsLists = (shipsList: ShipListCreator[]) => {
    const myList: shipsLeftListElement[] = [];
    const opponentsList: shipsLeftListElement[] = [];
    shipsList.forEach(({ size, quantity }) => {
      for (let i = 0; i < quantity; i++) {
        myList.push({ size, isSunk: false, id: uuid() } as shipsLeftListElement);
        opponentsList.push({ size, isSunk: false, id: uuid() } as shipsLeftListElement);
      }
    });
    setMyShipsList(myList);
    setOpponentShipsList(opponentsList);
  };

  const handleSunkShip = (userId: string, size: number) => {
    if (userId !== socket?.id) {
      const opponentList = [...opponentShipsList];
      for (let i = 0; i < opponentList.length; i++) {
        if (!opponentList[i].isSunk && opponentList[i].size === size) {
          opponentList[i].isSunk = true;
          break;
        }
      }
      setOpponentShipsList(opponentList);
    } else {
      const myList = [...myShipsList];
      for (let i = 0; i < myList.length; i++) {
        if (!myList[i].isSunk && myList[i].size === size) {
          myList[i].isSunk = true;
          break;
        }
      }
      setMyShipsList(myList);
    }
  };

  const gameContext = {
    myShots,
    opponentShots,
    handleShot,
    isMyTurn,
    isGameStarted,
    checkIfItIsMyTurn,
    handleSunkShip,
    winner,
    myShipsList,
    opponentShipsList,
  };

  return <GameContext.Provider value={gameContext}>{children}</GameContext.Provider>;
};

export default GameProvider;
