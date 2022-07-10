import { Board } from '../Board/Board';
import { Game } from '../Game/Game';
import { setComputerShips } from '../Helpers/helpers';
import { UserStatus } from '../Helpers/Types';
import { Computer, User } from '../User/user';

export class Room {
  protected users: User[] = [];
  private roomName;
  protected boards: Board[] = [];
  private game: Game | undefined;
  private isLocked: boolean;

  constructor(roomName: string) {
    this.roomName = roomName;
    this.isLocked = false;
    for (let i = 0; i < 2; i++) {
      this.boards.push(new Board());
    }
  }

  getIsLocked() {
    return this.isLocked;
  }

  setIsLocked(isLocked: boolean) {
    this.isLocked = isLocked;
  }
  public getRoomName() {
    return this.roomName;
  }
  public getUsers() {
    return this.users;
  }

  public getUsersNames() {
    const userNames = [];
    if (this.users.length === 2) {
      userNames.push(this.users[0]?.getName());
      userNames.push(this.users[1]?.getName());
      return userNames;
    }
    userNames.push('Err');
    userNames.push('Err');
    return userNames;
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

  hasUser(userId: string) {
    let hasUser = false;
    this.users.forEach((user) => {
      if (user.getId() === userId) hasUser = true;
    });

    return hasUser;
  }

  public getSanitized() {
    return {
      users: this.users,
      roomName: this.roomName,
      isLocked: this.isLocked,
    };
  }

  public getFreeBoard() {
    for (let i = 0; i < this.boards.length; i++) {
      if (!this.boards[i].hasUserId()) {
        return this.boards[i];
      }
    }
  }

  getBoards() {
    return this.boards;
  }

  changeUserStatus(userId: string, status: UserStatus) {
    this.users.forEach((user) => {
      if (user.getId() === userId) {
        user.setStatus(status);
      }
    });
  }

  areUsersReady() {
    if (this.users.length === 2 && this.users[0].getStatus() === 'ready' && this.users[1].getStatus() === 'ready') {
      return true;
    }
    return false;
  }

  resetUsers() {
    this.users = [];
  }

  startGame = () => {
    //console.log(this.boards, this.users, 'STARTREd');
    this.game = new Game(this.boards, this.users);
  };
  getGame = () => {
    return this.game;
  };
  endGame = () => {
    this.game = undefined;
    this.boards.forEach((board) => {
      board.resetBoard();
    });
  };
}

export class SpecialRoom extends Room {
  constructor(roomName: string, computerUser: Computer) {
    super(roomName);
    this.addComputerUser(computerUser);
  }
  addComputerUser = (computer: Computer) => {
    this.users.push(computer);
  };

  getComputer = () => {
    return this.users.filter((user) => {
      return user.getIsComputer() === true;
    });
  };

  addUser(user: User): void {
    const computer = this.users[0] as Computer;
    this.users.push(user);
    const board = this.getFreeBoard();
    board!.pushComputerShips(setComputerShips([5, 4, 4, 3, 3, 3, 2, 2, 2, 2]));
    board!.setUserId(this.users[0].getId());
    computer.startBattle();
    computer.setStatus('ready');
  }

  resetUsers() {
    this.users = this.users.filter((user) => {
      return user.getIsComputer() === true;
    });
    const computer = this.users[0] as Computer;
    computer && computer.setStatus('preparing');
    computer && computer.stopBattle();
  }

  clearDisconnectedUsers(userId: string): void {
    this.users = this.users.filter((user) => {
      return user.getId() != userId;
    });
    if (this.users.length < 2) {
      this.setIsLocked(false);
      const computer = this.users[0] as Computer;
      computer && computer.setStatus('preparing');
      computer && computer.stopBattle();
    }
  }
}
