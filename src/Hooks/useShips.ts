import { useState } from 'react';
import { Coordinates, TestShip } from '../Class/Ship';

const useShips = () => {
  const [ships, setShips] = useState<TestShip[]>([]);

  const addShip = (coordinates: Coordinates) => {
    ships.push(new TestShip(2, coordinates));
  };
  return {
    addShip,
    ships,
  };
};

export default useShips;
