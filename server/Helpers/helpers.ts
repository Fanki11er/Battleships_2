import { Server } from 'socket.io'
import { Room } from "../Room/room";
import { RoomInfo } from "./Types";

export class Helpers {
  private static createSingleRoomInfo(room: Room) {
    const usersNames: string[] = [];
    room.getUsers().forEach((user) => {
      usersNames.push(user.getName());
    });
    return {
      roomName: room.getRoomName(),
      users: usersNames,
    };
  }

  public static prepareRoomsInfo(rooms: Room[]) {
    const roomsInfo: RoomInfo[] = [];
    rooms.forEach((room) => {
      roomsInfo.push(this.createSingleRoomInfo(room));
    });
    return roomsInfo;
  }

  public static findSelectedRoom(rooms: Room[], roomName: string) {
    return rooms.find((currentRoom) => {
      return currentRoom.getRoomName() === roomName;
    });
  }

  public static removeDisconnectedUser(rooms: Room[], userId: string) {
    rooms.forEach((room) => {
      room.clearDisconnectedUsers(userId);
    });
  }

  public static findRoomNameByUserId(rooms: Room[], userId: string) {
    let roomName = "";
    rooms.forEach((room)=> {
      const test = room.hasUser(userId)
      if(room.hasUser(userId)) {
        
        roomName = room.getRoomName()
      }
    })
    return roomName
  }

 public static sanitizeRooms(rooms: Room[]){
    const sanitizedRooms: any = []
    rooms.forEach((room)=> {
      sanitizedRooms.push(room.getSanitized())
    })
    return sanitizedRooms;
  }

  public static resetBoard( userId: string, selectedRoom: Room | undefined,){
    selectedRoom?.getBoards().forEach((board)=> {
      if(board.getUserId() === userId){
        board.resetBoard()
      }
    })
  }


  public static cancelGame = (selectedRoom: Room, io: Server)=> {
    selectedRoom.getUsers().forEach((user)=> {
      selectedRoom.getGame()?.setTheWinner(user.getId())
    })
    const winner = selectedRoom.getGame()!.isSomeBodyWon();
    io.to(selectedRoom.getRoomName()).emit("Winner", winner);
    setTimeout(() => {
      io.to(selectedRoom.getRoomName()).emit("GameEnded");
      selectedRoom.endGame();
      selectedRoom.resetUsers();
    }, 5000);
  }
}





