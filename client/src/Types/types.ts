import { Position } from '../Class/BattleShip';

export type Identifier = {
  identifier: number;
  position: Position;
  size: number;
};

export type PossibleCoordinates = 'x' | 'y';

export type User = {
  name: string;
  id: string;
  status: UserStatus;
};

export type UserStatus = 'preparing' | 'ready';

export type RoomType = {
  users: User[];
  roomName: string;
};
