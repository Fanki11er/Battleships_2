import { BattleShip } from "../Battleship/Battleship";
import { Coordinates, Ship } from "../Helpers/Types";

export class Board {
    private userId: string = "";
    //private cells: Cell[] = [];
    private ships: BattleShip[] = []
    private usedCoordinates: Coordinates[] = []
    private sunkShips = 0;
    constructor(){
        //this.fillCells(size)
    }

    /*fillCells(size: number){
       const coordinates = this.makeCoordinates(size);
       coordinates.forEach((coordinate)=>{
           this.cells.push(new Cell(coordinate))
       })
    }*/

    /*makeCoordinates(size: number) {
        const coordinates: Coordinates[] = [];
        for (let i = 0; i < size; i++) {
          for (let j = 0; j < size; j++) {
            coordinates.push({ x: i, y: j });
          }
        }
        return coordinates;
      };*/

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
        this.ships = [];
        this.sunkShips  =0;
       /* this.cells.forEach((cell)=> {
            cell.resetCell();
        })*/
    }
    getUserId(){
        return this.userId;
    }

  /* public selectCell = (coordinates: Coordinates)=> {
        const {x,y} = coordinates;
        let cell: Cell | undefined;
        cell  = this.cells.find((cell)=> {
           return cell.getCoordinates().x === x && cell.getCoordinates().y === y;
        })
        return cell;
    }*/

    notUsedCoordinates = (coordinates: Coordinates)=> {
        const {x, y} = coordinates;
        for(let i=0; i< this.usedCoordinates.length; i++){
            if(this.usedCoordinates[i].x === x && this.usedCoordinates[i].y === y){
                return false;
            }
        }
        return true;
    }

    checkShips = (coordinates: Coordinates)=> {
        let isSunk = undefined;
        for(let i=0; i< this.ships.length; i++){
            if(this.ships[i].isShipHit(coordinates)){
                this.ships[i].addHit();
                isSunk =  this.ships[i].checkIfItIsSunk()
               if(isSunk){
                this.addSunkShip();
                return {
                    status: "hit" as Status,
                    sunkShipCoordinates: this.ships[i].coordinates,

                }
               }
               else {
                   return {
                    status: "hit" as Status,
                    sunkShipCoordinates: undefined,

                }
               }
                
            }
        }
        return {
            status: 'miss' as Status,
            sunkShipCoordinates: undefined,
        }
    }

    addSunkShip = ()=> {
        this.sunkShips +=1;
    }
areAllShipsSunk = ()=> {
    if(this.sunkShips === this.ships.length){
        return true
    }
    return false
}

}

/*class Cell {
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
    return this.getStatus()
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

getCoordinates = ()=> {
    return this.coordinates;
}


}*/

export type Status = "miss" | "hit" | "notTouched"

