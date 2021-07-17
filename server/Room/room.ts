import { Board } from "../Board/Board";
import { User } from "../User/user";

export class Room {
  private users: User[] = [];
  private roomName;
  private boards: Board[] = []
  private game: any;

  constructor(roomName: string, boardSize: number) {
    this.roomName = roomName;
    for(let i = 0; i< 2; i++){
      this.boards.push(new Board(boardSize))
    }

  }
  public getRoomName() {
    return this.roomName;
  }
  public getUsers() {
    return this.users;
  }
  addUser(user: User) {
    if (this.users.length < 2) {
      this.users.push(user);
    }
  }
  getNumberOfUsers() {
    return this.users.length;
  }
  clearDisconnectedUsers(userId: string) {
    this.users = this.users.filter((user) => {
      return user.getId() != userId;
    });
  }

  hasUser(userId: string){
    let hasUser = false;
    this.users.forEach((user)=> {
     
      if(user.getId() === userId)
      hasUser = true;
    })

    return hasUser;
  }

  public getSanitized(){
return {
  users: this.users,
  roomName: this.roomName,
}
  }

  public getFreeBoard(){
   for(let i=0; i< this.boards.length; i++){
     if(!this.boards[i].hasUserId()){
       return this.boards[i]
     }
   }
  }

  getBoards(){
    return this.boards
  }
}
