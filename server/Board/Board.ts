import { BattleShip } from "../Battleship/Battleship";
import { Coordinates, Ship } from "../Helpers/Types";

export class Board {
    private userId: string = "";
    private cells: Cell[] = [];
    private ships: BattleShip[] = []
    constructor(size: number){
        this.fillCells(size)
    }

    fillCells(size: number){
       const coordinates = this.makeCoordinates(size);
       coordinates.forEach((coordinate)=>{
           this.cells.push(new Cell(coordinate))
       })
    }

    makeCoordinates(size: number) {
        const coordinates: Coordinates[] = [];
        for (let i = 0; i < size; i++) {
          for (let j = 0; j < size; j++) {
            coordinates.push({ x: i, y: j });
          }
        }
        return coordinates;
      };

    pushShips(ships: Ship[]){
        ships.forEach(({coordinates, size})=> {
            this.ships.push(new BattleShip(coordinates,  size))
        })
    }

    setUserId(userId: string){
        this.userId = userId;
    }

    hasUserId(){
        return !!this.userId
    }

    resetBoard(){
        this.ships = [];
        this.userId = "";
        this.cells.forEach((cell)=> {
            cell.resetCell();
        })
    }
    getUserId(){
        return this.userId;
    }
}

class Cell {
    private coordinates: Coordinates = {x:0, y:0}
    private isEmpty = false;
    private isForbidden = false;
    private status: Status = "notTouched"
    constructor(coordinates: Coordinates){
        this.coordinates.x = coordinates.x;
        this.coordinates.y = coordinates.y;
    }
getStatus(){
    return this.status;
}
changeStatus(){
    if(!this.isEmpty){
        this.status = 'hit'; 
    }
    else {
        this.status = 'miss';
    }
}
isAvailable(){
    if(this.isEmpty && !this.isForbidden){
        return true;
    }
    return false;
}

resetCell(){
    this.isEmpty = true;
    this.isForbidden = false;
    this.status = "notTouched";
}


}

type Status = "miss" | "hit" | "notTouched"

