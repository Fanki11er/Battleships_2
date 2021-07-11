import { useEffect, useState } from 'react';
import { ShipListCreator, shipsList, ShipsToTake } from '../Data/shipsList';

const useShips = () => {
  const [shipsToTake, setShipsToTake] = useState<ShipsToTake[]>([]);
  console.log(shipsToTake, 'Hmm');
  useEffect(() => {
    setShipsToTake(createShipsList(shipsList));
  }, []);

  const removeMovedItem = (identifier: number) => {
    const newArray = shipsToTake.filter((element) => {
      return element.id !== identifier;
    });
    setShipsToTake([...newArray]);
  };
  const test = (shipsToTake: ShipsToTake[]) => {
    setShipsToTake(shipsToTake);
  };

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
  return {
    shipsToTake,
    removeMovedItem,
    test,
  };
};

export default useShips;
