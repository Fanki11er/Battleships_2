import React, { createContext, useEffect, useState } from 'react';
import { BattleShip, Coordinates, Position } from '../Class/BattleShip';
import { ShipsToTake, shipsList, ShipListCreator } from '../Data/shipsList';
import { checkAviableSpacesForHorizontalShipPosition, checkAviableSpacesForVerticalShipPosition } from '../Helpers/Helpers';
import { Identifier } from '../Types/types';

export const ShipsContext = createContext({
  shipsToTake: [] as ShipsToTake[],
  ships: [] as BattleShip[],
  moveShip: (coordinates: Coordinates, identifier: Identifier) => {},
  canMoveShip: (identifier: Identifier, coordinates: Coordinates, hasShip: boolean): boolean => false,
  handleShipRotate: (identifier: number | undefined) => {},
  boardSize: 0,
});

const ShipsProvider = (props: React.PropsWithChildren<React.ReactNode>) => {
  const BOARD_SIZE = 10;
  const { children } = props;
  const [shipsToTake, setShipsToTake] = useState<ShipsToTake[]>([]);
  const [ships, setShips] = useState<BattleShip[]>([]);

  const addShip = (coordinates: Coordinates, position: Position) => {
    ships.push(new BattleShip(2, coordinates, position));
    setShips([...ships]);
  };

  const moveShip = (coordinates: Coordinates, identifier: Identifier) => {
    addShip(coordinates, identifier.position);
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

    if ((position === 'horizontal' && y + size > BOARD_SIZE) || hasShip) return false;
    if ((position === 'vertical' && x + size > BOARD_SIZE) || hasShip) return false;
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

  const shipsContext = {
    shipsToTake,
    ships,
    moveShip,
    canMoveShip,
    handleShipRotate,
    boardSize: BOARD_SIZE,
  };
  return <ShipsContext.Provider value={shipsContext}>{children}</ShipsContext.Provider>;
};

export default ShipsProvider;
