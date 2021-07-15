
export class Board {
    private cells: Cell[] = [];
    constructor(size: number){
        this.fillCells(size*size)
    }

    fillCells(size: number){
        for(let i =0; i< size; i++ ){
            this.cells.push(new Cell(i));
        }
    }

    
}

class Cell {
    private id;
    private isEmpty = false;
    private isForbidden = false;
    private status: Status = "notTouched"
    constructor(id: number){
        this.id = id;
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
}

type Status = "miss" | "hit" | "notTouched"

