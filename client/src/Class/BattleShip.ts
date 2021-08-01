export type Position = 'horizontal' | 'vertical';
export type Coordinates = { x: number; y: number };

export class BattleShip {
  coordinates: Coordinates[] = [];
  position: Position;
  size: number;

  constructor(size: number, startCoordinates: Coordinates, position: Position = 'horizontal') {
    this.position = position;
    this.size = size;
    this.makeCoordinates(startCoordinates);
  }

  makeCoordinates = (startCoordinates: Coordinates) => {
    this.coordinates.push(startCoordinates);
    const { x, y } = startCoordinates;
    for (let i = 1; i < this.size; i++) {
      if (this.position === 'vertical') {
        this.coordinates.push({ x: x + i, y });
      } else {
        this.coordinates.push({ x, y: y + i });
      }
    }
  };
}
