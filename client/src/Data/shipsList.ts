import { Position } from '../Class/BattleShip';

export class ShipListCreator {
  size;
  quantity;
  constructor(size: number, quantity: number) {
    this.size = size;
    this.quantity = quantity;
  }
}

export const shipsList: ShipListCreator[] = [new ShipListCreator(2, 3)];

export type ShipsToTake = {
  size: number;
  id: number;
  position: Position;
};
