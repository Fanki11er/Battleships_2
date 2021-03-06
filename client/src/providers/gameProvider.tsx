import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Coordinates } from '../Class/BattleShip';
import { ShipListCreator, shipsList } from '../Data/shipsList';
import { Result, shipsLeftListElement, Shot, ShotResult } from '../Types/types';
import { SocketContext } from './socketProvider';
import { v4 as uuid } from 'uuid';
import { Redirect } from 'react-router-dom';
import { routes } from '../router/routes';

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
  handlePreparationCancel: (roomName: string) => {},
  resetPreparationCancelStatus: () => {},
  winner: '',
  isPreparationCanceled: false,
});

const GameProvider = (props: React.PropsWithChildren<React.ReactNode>) => {
  const { children } = props;
  const [myShots, setShots] = useState<ShotResult[]>([]);
  const [opponentShots, setOpponentShots] = useState<ShotResult[]>([]);
  const [myShipsList, setMyShipsList] = useState<shipsLeftListElement[]>([]);
  const [opponentShipsList, setOpponentShipsList] = useState<shipsLeftListElement[]>([]);
  const { socket } = useContext(SocketContext);
  const [isGameStarted, setGameStarted] = useState<boolean>(false);
  const [isPreparationCanceled, setIsPreparationCanceled] = useState(false);
  const [isMyTurn, setIsMyTurn] = useState(false);
  const [winner, setWinner] = useState('');
  const [isServerError, setIsServerError] = useState(false);
  const { error } = routes;

  const checkIfItIsMyTurn = useCallback(
    (currentTurnId: string) => {
      if (currentTurnId === socket?.id) {
        setIsMyTurn(true);
      } else if (currentTurnId !== socket?.id && currentTurnId.includes('AIP#')) {
        setIsMyTurn(false);
        if (!winner) {
          socket?.emit('requestAIShot');
        }
      } else {
        setIsMyTurn(false);
      }
    },
    [socket, winner]
  );

  const resetGame = useCallback(() => {
    setGameStarted(false);
    setShots([]);
    setOpponentShots([]);
    setIsMyTurn(false);
    setWinner('');
    createShipsLists(shipsList);
  }, []);

  const handlePreparationCancel = useCallback(
    (roomName: string) => {
      setIsPreparationCanceled(true);
      resetGame();
      socket?.emit('leaveTheRoom', roomName);
    },
    [socket, resetGame]
  );

  const resetPreparationCancelStatus = useCallback(() => {
    setIsPreparationCanceled(false);
  }, []);

  const handleSunkShip = useCallback(
    (userId: string, size: number) => {
      if (userId === socket?.id) {
        const opponentList = [...opponentShipsList];
        for (let i = 0; i < opponentList.length; i++) {
          if (!opponentList[i].isSunk && opponentList[i].size === size) {
            opponentList[i].isSunk = true;
            return;
          }
        }
        setOpponentShipsList(opponentList);
      } else {
        const myList = [...myShipsList];
        for (let i = 0; i < myList.length; i++) {
          if (!myList[i].isSunk && myList[i].size === size) {
            myList[i].isSunk = true;
            return;
          }
        }
        setMyShipsList(myList);
      }
    },
    [myShipsList, opponentShipsList, socket]
  );

  useEffect(() => {
    socket?.once('shotResult', (result: Result) => {
      const { shotResult, currentPlayer } = result;
      shotResult.id = uuid();
      if (shotResult.userId === socket.id) {
        setShots([...myShots, shotResult]);
      } else {
        setOpponentShots([...opponentShots, shotResult]);
      }

      if (shotResult.sunkShip > 0) {
        handleSunkShip(shotResult.userId, shotResult.sunkShip);
      }
      if (!winner) {
        checkIfItIsMyTurn(currentPlayer as string);
      }
    });
    return () => {
      socket?.off('shotResult');
    };
  }, [myShots, opponentShots, socket, checkIfItIsMyTurn, handleSunkShip, winner]);

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
    return () => {
      socket?.off('startGame');
    };
  });

  useEffect(() => {
    socket?.on('GameEnded', () => {
      resetGame();
    });
    return () => {
      socket?.off('GameEnded');
    };
  }, [socket, resetGame]);

  const handleShot = (coordinates: Coordinates) => {
    socket?.emit('shot', { coordinates, userId: socket.id } as Shot);
  };

  useEffect(() => {
    createShipsLists(shipsList);
  }, []);

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

  useEffect(() => {
    socket?.once('serverError', () => {
      setIsServerError(true);
    });
    return () => {
      socket?.off('serverError');
    };
  }, [myShots, opponentShots, socket, checkIfItIsMyTurn, handleSunkShip]);

  useEffect(() => {
    socket?.on('connect_error', () => {
      setIsServerError(true);
    });
    return () => {
      socket?.off('connect_error');
    };
  }, [socket]);

  if (isServerError) {
    return <Redirect to={{ pathname: error }} />;
  }

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
    isPreparationCanceled,
    handlePreparationCancel,
    resetPreparationCancelStatus,
  };

  return <GameContext.Provider value={gameContext}>{children}</GameContext.Provider>;
};

export default GameProvider;
