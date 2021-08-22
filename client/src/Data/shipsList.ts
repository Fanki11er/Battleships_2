import { Position } from '../Class/BattleShip';

export class ShipListCreator {
  size;
  quantity;
  constructor(size: number, quantity: number) {
    this.size = size;
    this.quantity = quantity;
  }
}

export const shipsList: ShipListCreator[] = [
  new ShipListCreator(5, 1),
  new ShipListCreator(4, 2),
  new ShipListCreator(3, 3),
  new ShipListCreator(2, 4),
];
//export const shipsList: ShipListCreator[] = [new ShipListCreator(2, 2)];

export type ShipsToTake = {
  size: number;
  id: number;
  position: Position;
};
