import { Position } from '../Class/BattleShip';

export type Identifier = {
  identifier: number;
  position: Position;
  size: number;
};

export type PossibleCoordinates = 'x' | 'y';
