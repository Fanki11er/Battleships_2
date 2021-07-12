import React, { createContext, useEffect, useState } from 'react';
import { BattleShip, Coordinates } from '../Class/BattleShip';
import { ShipsToTake, shipsList, ShipListCreator } from '../Data/shipsList';
import { Identifier } from '../Types/types';

export const ShipsContext = createContext({
  shipsToTake: [] as ShipsToTake[],
  ships: [] as BattleShip[],
  moveShip: (coordinates: Coordinates, identifier: Identifier) => {},
});

const ShipsProvider = (props: React.PropsWithChildren<React.ReactNode>) => {
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
  };
  return <ShipsContext.Provider value={shipsContext}>{children}</ShipsContext.Provider>;
};

export default ShipsProvider;
