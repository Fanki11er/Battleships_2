import React, { createContext, useEffect, useState } from 'react';
import { ShipsToTake, shipsList, ShipListCreator } from '../Data/shipsList';

export const ShipsContext = createContext({
  shipsToTake: [] as ShipsToTake[],
  updateShipsToTake: (shipsToTake: ShipsToTake[]) => {},
  removeMovedShip: (identifier: number) => {},
});

const ShipsProvider = (props: React.PropsWithChildren<React.ReactNode>) => {
  const { children } = props;
  const [shipsToTake, setShipsToTake] = useState<ShipsToTake[]>([]);

  useEffect(() => {
    updateShipsToTake(createShipsList(shipsList));
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

  const updateShipsToTake = (shipsToTake: ShipsToTake[]) => {
    setShipsToTake(shipsToTake);
  };

  const removeMovedShip = (identifier: number) => {
    const newArray = shipsToTake.filter((element) => {
      return element.id !== identifier;
    });
    updateShipsToTake(newArray);
  };

  const shipsContext = {
    shipsToTake,
    updateShipsToTake,
    removeMovedShip,
  };
  return <ShipsContext.Provider value={shipsContext}>{children}</ShipsContext.Provider>;
};

export default ShipsProvider;
