import React, { createContext, useEffect, useState } from 'react';
import { BattleShip, Coordinates } from '../Class/BattleShip';
import { ShipsToTake, shipsList, ShipListCreator } from '../Data/shipsList';
import { Identifier } from '../Types/types';

export const ShipsContext = createContext({
  shipsToTake: [] as ShipsToTake[],
  ships: [] as BattleShip[],
  moveShip: (coordinates: Coordinates, identifier: Identifier) => {},
  canMoveShip: (identifier: Identifier, coordinates: Coordinates, hasShip: boolean): boolean => false,
  boardSize: 0,
});

const ShipsProvider = (props: React.PropsWithChildren<React.ReactNode>) => {
  const BOARD_SIZE = 3;
  const { children } = props;
  const [shipsToTake, setShipsToTake] = useState<ShipsToTake[]>([]);
  const [ships, setShips] = useState<BattleShip[]>([]);

  const addShip = (coordinates: Coordinates) => {
    ships.push(new BattleShip(2, coordinates));
    setShips([...ships]);
  };

  const moveShip = (coordinates: Coordinates, identifier: Identifier) => {
    addShip(coordinates);
    removeMovedShip(identifier.identifier);
  };

  const canMoveShip = (identifier: Identifier, coordinates: Coordinates, hasShip: boolean) => {
    const { position, size } = identifier;
    const { x, y } = coordinates;

    if ((position === 'horizontal' && y + size > BOARD_SIZE) || hasShip) return false;
    if ((position === 'vertical' && x + size > BOARD_SIZE) || hasShip) return false;
    if (!hasShip) return true;
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
        createdShipSList.push({ size: shipsList[i].size, id: counter });
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

  const shipsContext = {
    shipsToTake,
    ships,
    moveShip,
    canMoveShip,
    boardSize: BOARD_SIZE,
  };
  return <ShipsContext.Provider value={shipsContext}>{children}</ShipsContext.Provider>;
};

export default ShipsProvider;
