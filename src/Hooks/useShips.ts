import { useState } from 'react';
import { Coordinates, BattleShip } from '../Class/BattleShip';

const useShips = () => {
  const [ships, setShips] = useState<BattleShip[]>([]);

  const addShip = (coordinates: Coordinates) => {
    const newShips = [...ships];
    newShips.push(new BattleShip(2, coordinates));
    setShips(newShips);
  };
  return {
    addShip,
    ships,
  };
};

export default useShips;
