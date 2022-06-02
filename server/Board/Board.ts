import { BattleShip } from '../Battleship/Battleship';
import { Coordinates, Ship } from '../Helpers/Types';

export class Board {
  private userId: string = '';
  private ships: BattleShip[] = [];
  private usedCoordinates: Coordinates[] = [];
  private sunkShips = 0;
  constructor() {}

  pushShips(ships: Ship[]) {
    ships.forEach(({ coordinates, size }) => {
      this.ships.push(new BattleShip(coordinates, size));
    });
  }

  pushComputerShips = (ships: BattleShip[]) => {
    ships.forEach((ship) => {
      this.ships.push(ship);
    });
  };

  setUserId(userId: string) {
    this.userId = userId;
  }

  hasUserId() {
    return !!this.userId;
  }

  resetBoard() {
    this.ships = [];
    this.userId = '';
    this.sunkShips = 0;
    this.usedCoordinates = [];
  }

  getUserId() {
    return this.userId;
  }

  notUsedCoordinates = (coordinates: Coordinates) => {
    const { x, y } = coordinates;
    for (let i = 0; i < this.usedCoordinates.length; i++) {
      if (this.usedCoordinates[i].x === x && this.usedCoordinates[i].y === y) {
        return false;
      }
    }
    return true;
  };

  public addUsedCoordinates = (coordinates: Coordinates) => {
    this.usedCoordinates.push(coordinates);
  };

  checkShips = (coordinates: Coordinates) => {
    let isSunk = undefined;
    for (let i = 0; i < this.ships.length; i++) {
      if (this.ships[i].isShipHit(coordinates)) {
        this.ships[i].addHit();
        isSunk = this.ships[i].checkIfItIsSunk();
        if (isSunk) {
          this.addSunkShip();
          return {
            status: 'hit' as Status,
            sunkShipSize: this.ships[i].size,
          };
        } else {
          return {
            status: 'hit' as Status,
            sunkShipSize: 0,
          };
        }
      }
    }
    return {
      status: 'miss' as Status,
      sunkShipSize: 0,
    };
  };

  addSunkShip = () => {
    this.sunkShips += 1;
  };
  areAllShipsSunk = () => {
    if (this.sunkShips === this.ships.length) {
      return true;
    }
    return false;
  };
}

export type Status = 'miss' | 'hit' | 'notTouched';
