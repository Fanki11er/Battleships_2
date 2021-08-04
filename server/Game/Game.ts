import { Board, Status } from "../Board/Board";
import { Result, Shot, ShotResult } from "../Helpers/Types";
import { User } from "../User/user";

export class Game  {
  private boards: Board[] = [] 
  private users: User[] = []
  private currentPlayer: string | undefined = undefined;
  private theWinner: string | undefined = undefined

  constructor( boards: Board[],  users: User[]){
this.boards =boards
this.users = users
this.drawFirstUser(this.users);
  }

  setCurrentPlayer = (userId: string)=> {
this.currentPlayer = userId;
  }
  getCurrentPlayer = ()=> this.currentPlayer;

  drawFirstUser = (users: User[])=> {
   const  min = Math.ceil(0);
    const max = Math.floor(1);
const index = Math.floor(Math.random() * (max - min + 1)) + min;
 this.setCurrentPlayer( users[index].getId())
  }

  checkIfItsCurrentUserShot = (userId: string)=> {
if(userId === this.currentPlayer) return true
return false;
  }

  handleShot = (shot: Shot)=> {
      const{userId, coordinates} = shot;
      let selectedBoard: Board[] = []
      let result: Result = {status: "notTouched", sunkShipCoordinates: undefined}
    if(this.checkIfItsCurrentUserShot(userId)){
         selectedBoard =  this.boards.filter((board)=> {
            return board.getUserId() !== userId
        })
        this.setCurrentPlayer(selectedBoard[0].getUserId())
        if(selectedBoard[0].notUsedCoordinates(coordinates)){
          result  = selectedBoard[0].checkShips(coordinates)
          if(selectedBoard[0].areAllShipsSunk()){
            this.theWinner = shot.userId;
        }
        }
      
        return new ShotResult(coordinates, result, userId)
    }
    return undefined
    //!Error handler
  }

  isSomeBodyWon = ()=>{
      return this.theWinner;
  }
} 