import { Coordinates } from "../Helpers/Types";

export class BattleShip {
    coordinates: Coordinates[] = [];
    size: number;
    hits: number = 0;
    isSunk: boolean = false;
    constructor(coordinates: Coordinates[], size: number){
        this.coordinates = [...coordinates];
        this.size = size;
    }


  }