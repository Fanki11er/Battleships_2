import { Coordinates, BattleShip } from '../Class/BattleShip';

export const setOnBoard = (position: string, callback: (position: string) => {}) => {
  callback(position);
};
export const ItemTypes = {
  SHIP: 'SHIP',
};

export const makeCoordinates = (size: number) => {
  const coordinates: Coordinates[] = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      coordinates.push({ x: i, y: j });
    }
  }
  return coordinates;
};

/*export const checkIfHasShip = (coordinates: Coordinates, ships: TestShip[]) => {
  const { x, y } = coordinates;
  const hasShip = ships.filter((ship) => {
    return ship.coordinates.filter(({ x: sX, y: sY }) => {
      console.log(x, sX, y, sY);
      return sX === x && sY === y;
    });
  });

  return !!hasShip.length;
};*/

export const checkIfHasShip = (coordinates: Coordinates, ships: BattleShip[]) => {
  const { x, y } = coordinates;
  const hasShip = ships.filter((ship) => {
    const hasCoordinates = ship.coordinates.filter(({ x: sX, y: sY }) => {
      return sX === x && sY === y;
    });
    return !!hasCoordinates.length;
  });

  return !!hasShip.length;
};
