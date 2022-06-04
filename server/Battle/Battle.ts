import { Coordinates, ShotPossibility, ShotResult } from '../Helpers/Types';
export class Battle {
  private sizesLeft = [5, 4, 4, 3, 3, 3, 2, 2, 2, 2];
  private leftCells: Coordinates[] = [];
  private hits: Coordinates[] = [];

  constructor() {
    this.makeCoordinates(10);
  }

  private makeCoordinates = (size: number) => {
    for (let i = 1; i <= size; i++) {
      for (let j = 1; j <= size; j++) {
        this.leftCells.push({ x: i, y: j });
      }
    }
  };

  public takeShot = (): Coordinates => {
    if (!this.hits.length) {
      const index = this.hunt();
      return { x: this.leftCells[index].x, y: this.leftCells[index].y };
    } else {
      return this.attack(this.hits[this.hits.length - 1]);
    }
  };

  private hunt = () => {
    let counter = 0;

    while (counter < 10) {
      let index = Math.floor(Math.random() * this.leftCells.length);
      const spaceSize = this.seekCurrentSize();
      const possibilities = this.checkShotPossibilities({ x: this.leftCells[index].x, y: this.leftCells[index].y }, spaceSize);
      counter++;
      if (possibilities.length) {
        return index;
      }
    }

    return Math.floor(Math.random() * this.leftCells.length);
  };

  public checkResult = (result: ShotResult) => {
    const { coordinates, status, sunkShipCoordinates, sunkShip } = result;
    this.updateLeftCells(coordinates);

    if (sunkShipCoordinates) {
      for (let i = 0; i < sunkShipCoordinates.length; i++) {
        this.updateHits(sunkShipCoordinates[i]);
      }
      const index = this.sizesLeft.indexOf(sunkShip);
      this.sizesLeft.splice(index, 1);
      return;
    }
    if (status === 'hit') {
      this.hits.push(coordinates);
    }
  };

  private updateLeftCells = (coordinates: Coordinates) => {
    this.leftCells = this.leftCells.filter((cell) => {
      return cell.x !== coordinates.x || cell.y !== coordinates.y;
    });
  };

  private updateHits = (coordinates: Coordinates) => {
    this.hits = this.hits.filter((cell) => {
      return cell.x !== coordinates.x || cell.y !== coordinates.y;
    });
  };

  private attack = (coreCoordinates: Coordinates) => {
    const spaceSize = this.seekCurrentSize();
    const shotPossibilities = this.checkShotPossibilities(coreCoordinates, spaceSize);
    const chosenDirection = Math.floor(Math.random() * shotPossibilities.length);
    if (shotPossibilities.length === 1) {
      this.updateHits(coreCoordinates);
    }
    const { x, y } = coreCoordinates;
    switch (shotPossibilities[chosenDirection]) {
      case 'LEFT': {
        return {
          x: x,
          y: y - 1,
        };
      }
      case 'TOP': {
        return {
          x: x - 1,
          y: y,
        };
      }
      case 'RIGHT': {
        return {
          x: x,
          y: y + 1,
        };
      }
      case 'DOWN': {
        return {
          x: x + 1,
          y: y,
        };
      }
      default: {
        const index = this.hunt();
        return { x: this.leftCells[index].x, y: this.leftCells[index].y };
      }
    }
  };

  private checkShotPossibilities = (coordinates: Coordinates, spaceSize: number) => {
    const shotPossibilities: ShotPossibility[] = [];
    if (this.isPossibleToShotLeft(coordinates, spaceSize)) {
      shotPossibilities.push('LEFT');
    }
    if (this.isPossibleToShotTop(coordinates, spaceSize)) {
      shotPossibilities.push('TOP');
    }

    if (this.isPossibleToShotRight(coordinates, spaceSize)) {
      shotPossibilities.push('RIGHT');
    }

    if (this.isPossibleToShotDown(coordinates, spaceSize)) {
      shotPossibilities.push('DOWN');
    }
    return shotPossibilities;
  };

  private isPossibleToShotLeft = (coreCell: Coordinates, size: number) => {
    for (let i = 1; i <= size; i++) {
      const result = this.leftCells.filter((cell) => {
        return cell.y === coreCell.y - i && cell.x === coreCell.x;
      });
      if (!result.length) {
        return false;
      }
    }
    return true;
  };

  private isPossibleToShotTop = (coreCell: Coordinates, size: number) => {
    for (let i = 1; i <= size; i++) {
      const result = this.leftCells.filter((cell) => {
        return cell.x === coreCell.x - i && cell.y === coreCell.y;
      });

      if (!result.length) {
        return false;
      }
    }
    return true;
  };

  private isPossibleToShotRight = (coreCell: Coordinates, size: number) => {
    for (let i = 1; i <= size; i++) {
      const result = this.leftCells.filter((cell) => {
        return cell.y === coreCell.y + i && cell.x === coreCell.x;
      });

      if (!result.length) {
        return false;
      }
    }
    return true;
  };

  private isPossibleToShotDown = (coreCell: Coordinates, size: number) => {
    for (let i = 1; i <= size; i++) {
      const result = this.leftCells.filter((cell) => {
        return cell.x === coreCell.x + i && cell.y === coreCell.y;
      });

      if (!result.length) {
        return false;
      }
    }
    return true;
  };

  seekCurrentSize = () => {
    const seekSize = this.sizesLeft[this.sizesLeft.length - 1]; // Min size of ship on the board
    return seekSize - this.hits.length > 1 ? seekSize - this.hits.length : 1; // Figure what min size of ship we are looking
  };
}
