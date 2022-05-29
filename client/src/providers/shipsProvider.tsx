import React, { createContext, useCallback, useEffect, useState } from 'react';
import { BattleShip, Coordinates, Position } from '../Class/BattleShip';
import { ShipsToTake, shipsList, ShipListCreator } from '../Data/shipsList';
import {
  checkAviableSpacesForHorizontalShipPosition,
  checkAviableSpacesForVerticalShipPosition,
  makeCoordinates,
  setShipsOnRandomPositions,
} from '../Helpers/Helpers';
import { Identifier } from '../Types/types';

export const ShipsContext = createContext({
  shipsToTake: [] as ShipsToTake[],
  ships: [] as BattleShip[],
  coordinates: [] as Coordinates[],
  moveShip: (coordinates: Coordinates, identifier: Identifier) => {},
  canMoveShip: (identifier: Identifier, coordinates: Coordinates, hasShip: boolean): boolean => false,
  handleShipRotate: (identifier: number | undefined) => {},
  handleResetShips: () => {},
  setRandomShips: () => {},
  boardSize: 0,
});

const ShipsProvider = (props: React.PropsWithChildren<React.ReactNode>) => {
  const BOARD_SIZE = 10;
  const { children } = props;
  const [shipsToTake, setShipsToTake] = useState<ShipsToTake[]>([]);
  const [ships, setShips] = useState<BattleShip[]>([]);
  const [coordinates, setCoordinates] = useState<Coordinates[]>([]);

  const setRandomShips = () => {
    setShips([]);
    setShips(setShipsOnRandomPositions([5, 4, 4, 3, 3, 3, 2, 2, 2, 2]));
    setShipsToTake([]);
  };

  const addShip = (coordinates: Coordinates, position: Position, size: number) => {
    ships.push(new BattleShip(size, coordinates, position));
    setShips([...ships]);
  };

  const moveShip = (coordinates: Coordinates, identifier: Identifier) => {
    addShip(coordinates, identifier.position, identifier.size);
    removeMovedShip(identifier.identifier);
  };

  const canMoveShip = (identifier: Identifier, coordinates: Coordinates, hasShip: boolean) => {
    if (!checkIfThereIsEnoughSpaceOnBoard(identifier, coordinates, hasShip)) return false;
    if (!checkIfIsEnoughPlaceForMove(identifier, coordinates)) return false;
    return true;
  };

  const checkIfThereIsEnoughSpaceOnBoard = (identifier: Identifier, coordinates: Coordinates, hasShip: boolean) => {
    const { position, size } = identifier;
    const { x, y } = coordinates;

    if ((position === 'horizontal' && y + size - 1 > BOARD_SIZE) || hasShip) return false;
    if ((position === 'vertical' && x + size - 1 > BOARD_SIZE) || hasShip) return false;
    return true;
  };

  const checkIfIsEnoughPlaceForMove = (identifier: Identifier, coordinates: Coordinates) => {
    const { position } = identifier;

    if (position === 'horizontal') {
      return checkAviableSpacesForHorizontalShipPosition(ships, coordinates, identifier);
    } else if (position === 'vertical') {
      return checkAviableSpacesForVerticalShipPosition(ships, coordinates, identifier);
    }
    return true;
  };

  useEffect(() => {
    setShipsToTake(createShipsList(shipsList));
  }, []);

  useEffect(() => {
    setCoordinates(makeCoordinates(BOARD_SIZE));
  }, [BOARD_SIZE]);

  const createShipsList = (shipsList: ShipListCreator[]) => {
    const createdShipSList: ShipsToTake[] = [];
    let counter = 0;
    for (let i = 0; i < shipsList.length; i++) {
      for (let j = 0; j < shipsList[i].quantity; j++) {
        createdShipSList.push({ size: shipsList[i].size, id: counter, position: 'horizontal' });
        counter++;
      }
    }
    return createdShipSList;
  };

  const removeMovedShip = (identifier: number) => {
    const newArray = shipsToTake.filter((element) => {
      return element.id !== identifier;
    });
    setShipsToTake(newArray);
  };

  const handleShipRotate = (identifier: number | undefined) => {
    const shipToRotate = shipsToTake.filter((ship) => {
      return ship.id === identifier;
    });

    if (shipToRotate.length && shipToRotate[0].position === 'horizontal') {
      shipToRotate[0].position = 'vertical';
      setShipsToTake([...shipsToTake]);
    } else {
      shipToRotate[0].position = 'horizontal';
      setShipsToTake([...shipsToTake]);
    }
  };

  const handleResetShips = useCallback(() => {
    setShipsToTake(createShipsList(shipsList));
    setShips([]);
  }, []);

  const shipsContext = {
    shipsToTake,
    ships,
    coordinates,
    moveShip,
    canMoveShip,
    handleShipRotate,
    handleResetShips,
    setRandomShips,
    boardSize: BOARD_SIZE,
  };
  return <ShipsContext.Provider value={shipsContext}>{children}</ShipsContext.Provider>;
};

export default ShipsProvider;
