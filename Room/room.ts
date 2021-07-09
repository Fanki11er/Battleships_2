import { User } from "../User/user";

export class Room {
  private users: User[] = [];
  private roomName;

  constructor(roomName: String) {
    this.roomName = roomName;
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
  clearDisconnectedUsers(userId: String) {
    this.users = this.users.filter((user) => {
      return user.getId() != userId;
    });
  }
}
