import { Coordinates, BattleShip, Position } from '../Class/BattleShip';
import { Identifier, PossibleCoordinates, RandomShipCoordinates } from '../Types/types';

export const setOnBoard = (position: string, callback: (position: string) => {}) => {
  callback(position);
};
export const ItemTypes = {
  SHIP: 'SHIP',
};

export const makeCoordinates = (size: number) => {
  const coordinates: Coordinates[] = [];
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      coordinates.push({ x: i, y: j });
    }
  }
  return coordinates;
};

export const setCellColor = (canDrop: boolean, isOver: boolean, trueColor: string, falseColor: string, overColor: string) => {
  if (canDrop && isOver) return overColor;
  if (canDrop) return trueColor;
  if (!canDrop) return falseColor;
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
    if (shipPosition === 'vertical' && y + size > shipCoordinates[0].y && y < shipCoordinates[shipSize - 1].y) {
      isEnoughPlaceForMove = false;
      break;
    } else if (shipPosition === 'horizontal') {
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

//?################################ SET SHIPS ON RANDOM POSITION ###################################################

const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max + 1);
};

const getRandomCoordinate = (max: number): RandomShipCoordinates => {
  let randomX;
  let randomY;
  const orientation: Position = getRandomNumber(100) % 2 === 0 ? 'horizontal' : 'vertical';

  if (orientation === 'horizontal') {
    randomY = getRandomNumber(max);
    randomX = getRandomNumber(10);
  } else {
    randomY = getRandomNumber(10);
    randomX = getRandomNumber(max);
  }

  return {
    randomX,
    randomY,
    orientation,
  };
};
const extendStartCoordinates = (size: number, startCoordinates: Coordinates, orientation: Position) => {
  const coordinates: Coordinates[] = [];
  coordinates.push(startCoordinates);
  const { x, y } = startCoordinates;
  for (let i = 1; i < size; i++) {
    if (orientation === 'vertical') {
      coordinates.push({ x: x + i, y });
    } else {
      coordinates.push({ x, y: y + i });
    }
  }
  return coordinates;
};

const isThereCollision = (usedCoordinates: Coordinates[], coordinates: Coordinates, size: number, orientation: Position) => {
  const extendedCoordinates = extendStartCoordinates(size, coordinates, orientation);
  for (let i = 0; i < extendedCoordinates.length; i++) {
    const { x: newX, y: newY } = extendedCoordinates[i];
    const collisions = usedCoordinates.filter(({ x, y }) => {
      return x === newX && y === newY;
    });
    if (collisions.length) {
      return true;
    }
  }

  return false;
};

export const setShipsOnRandomPositions = (shipSizes: number[]) => {
  const ships: BattleShip[] = [];
  const usedCoordinates: Coordinates[] = [];
  const sizes = [...shipSizes];

  while (sizes.length) {
    const coordinates = getRandomCoordinate(sizes[0]);
    if (!isThereCollision(usedCoordinates, { x: coordinates.randomX, y: coordinates.randomY }, sizes[0], coordinates.orientation)) {
      const ship = new BattleShip(sizes[0], { x: coordinates.randomX, y: coordinates.randomY }, coordinates.orientation);
      ships.push(ship);
      sizes.shift();
      usedCoordinates.push(...ship.coordinates);
    }
  }
  return ships;
};

export const handleClickEnter = (e: React.KeyboardEvent<SVGSVGElement>, callback: Function) => {
  if (e.key === 'Enter') {
    callback();
  }
};
