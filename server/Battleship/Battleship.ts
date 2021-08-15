import { Coordinates } from '../Helpers/Types';

export class BattleShip {
  coordinates: Coordinates[] = [];
  size: number;
  hits: number = 0;
  isSunk: boolean = false;
  constructor(coordinates: Coordinates[], size: number) {
    this.coordinates = [...coordinates];
    this.size = size;
  }

  isShipHit = (coordinates: Coordinates) => {
    const { x, y } = coordinates;
    let itIs = this.coordinates.filter((coordinate) => {
      return coordinate.x === x && coordinate.y === y;
    }).length;
    return !!itIs;
  };
  addHit = () => {
    this.hits += 1;
  };
  checkIfItIsSunk = () => {
    if (this.hits >= this.size) {
      this.isSunk = true;
      return this.isSunk;
    } else return this.isSunk;
  };
}
