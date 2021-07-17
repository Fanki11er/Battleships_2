import { BattleShip } from "../Battleship/Battleship";

export type RoomInfo = {
  roomName: String;
  users: String[];
};
export type UserStatus = 'preparing' | 'ready'| ""
export type Coordinates = { x: number; y: number };
export type Position = 'horizontal' | 'vertical';

export type Ship = Omit<BattleShip, "isSunk"> & Omit<BattleShip, "hits"> & Position

