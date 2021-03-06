import { Coordinates, Position } from '../Class/BattleShip';

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
  isComputer?: boolean | undefined;
};

export type UserStatus = 'preparing' | 'ready';

export type RoomType = {
  users: User[];
  roomName: string;
  isLocked: boolean;
};

export type SortedUsers = {
  me: User | undefined;
  opponent: User | undefined;
};

export type ShipSettings = {
  setContainerWidth: (orientation: string, shipSize: number, cellSize: number) => string;
  setContainerHeight: (orientation: string, shipSize: number, cellSize: number) => string;
  column: string;
  row: string;
  shipSize: number;
};

export type Status = 'miss' | 'hit' | '';

export type Shot = {
  coordinates: Coordinates;
  userId: string;
};

export type ShotResult = {
  coordinates: Coordinates;
  status: Status;
  userId: string;
  sunkShip: number;
  id: string;
};

export type Result = {
  shotResult: ShotResult;
  currentPlayer: string;
};

export type Shots = {
  myShots: ShotResult[];
  opponentShots: ShotResult[];
};

export type shipsLeftListElement = {
  size: number;
  isSunk: boolean;
  id: string;
};

export type RandomShipCoordinates = {
  randomX: number;
  randomY: number;
  orientation: Position;
};

export type HelpPage = {
  helpText: string;
  imageSrc: string;
};
