import { Coordinates, BattleShip } from '../Class/BattleShip';
import { Identifier, PossibleCoordinates } from '../Types/types';

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

export const setCellColor = (isOver: boolean, canDrop: boolean) => {
  if (canDrop) return 'green';
  if (!canDrop) return 'red';
};

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

export const checkAviableSpacesForHorizontalShipPosition = (ships: BattleShip[], coordinates: Coordinates, identifier: Identifier) => {
  let isEnoughPlaceForMove = true;
  const { size } = identifier;
  const { y } = coordinates;
  const { filteredShips, coordinate: xCoordinate } = filterShipsByCoordinate(ships, coordinates, 'x');
  for (let i = 0; i < filteredShips.length; i++) {
    const { position: shipPosition, coordinates: shipCoordinates, size: shipSize } = filteredShips[i];
    if (shipPosition === 'horizontal' && y + size > shipCoordinates[0].y && y < shipCoordinates[shipSize - 1].y) {
      isEnoughPlaceForMove = false;
      break;
    } else if (shipPosition === 'vertical') {
      if (xCoordinate !== undefined && y + size > shipCoordinates[0].y && y < shipCoordinates[0].y) {
        isEnoughPlaceForMove = false;
        break;
      }
    }
  }
  return isEnoughPlaceForMove;
};

export const checkAviableSpacesForVerticalShipPosition = (ships: BattleShip[], coordinates: Coordinates, identifier: Identifier) => {
  let isEnoughPlaceForMove = true;
  const { size } = identifier;
  const { x } = coordinates;
  const { filteredShips } = filterShipsByCoordinate(ships, coordinates, 'y');
  for (let i = 0; i < filteredShips.length; i++) {
    const { position: shipPosition, coordinates: shipCoordinates, size: shipSize } = filteredShips[i];
    if (shipPosition === 'vertical' && x + size > shipCoordinates[0].x && x < shipCoordinates[shipSize - 1].x) {
      isEnoughPlaceForMove = false;
      break;
    } else if (shipPosition === 'horizontal') {
      for (let j = 0; j < shipCoordinates.length; j++) {
        if (x + size > shipCoordinates[j].x && x < shipCoordinates[j].x) {
          isEnoughPlaceForMove = false;
          break;
        }
      }
    }
  }
  return isEnoughPlaceForMove;
};

const filterShipsByCoordinate = (ships: BattleShip[], cellCoordinates: Coordinates, filterCoordinate: PossibleCoordinates) => {
  let coordinate: number | undefined;
  const filteredShips = ships.filter(({ coordinates, size }) => {
    let isOnShipLine = false;
    for (let i = 0; i < size; i++) {
      if (cellCoordinates[filterCoordinate] === coordinates[i][filterCoordinate]) {
        isOnShipLine = true;
        coordinate = cellCoordinates[filterCoordinate];
        break;
      }
    }
    return isOnShipLine;
  });
  return { filteredShips, coordinate };
};
