import { BattleShip } from '../Battleship/Battleship';
import { Status } from '../Board/Board';

export type RoomInfo = {
  roomName: String;
  users: string[];
};
export type UserStatus = 'preparing' | 'ready' | '';
export type Coordinates = { x: number; y: number };
export type RandomShipCoordinates = {
  randomX: number;
  randomY: number;
  orientation: Position;
};
export type Position = 'horizontal' | 'vertical';

export type Ship = Omit<BattleShip, 'isSunk'> & Omit<BattleShip, 'hits'> & Position;

export type Shot = {
  coordinates: Coordinates;
  userId: string;
};

export class ShotResult {
  coordinates: Coordinates;
  status: Status;
  userId: string;
  sunkShip: number;

  constructor(coordinates: Coordinates, result: Result, userId: string) {
    this.coordinates = coordinates;
    this.status = result.status;
    this.userId = userId;
    this.sunkShip = result.sunkShipSize;
  }
}

export type Result = {
  status: Status;
  sunkShipSize: number;
};
