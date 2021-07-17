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

  public static findSelectedRoom(rooms: Room[], roomName: String) {
    return rooms.find((currentRoom) => {
      return currentRoom.getRoomName() === roomName;
    });
  }

  public static removeDisconnectedUser(rooms: Room[], userId: String) {
    rooms.forEach((room) => {
      room.clearDisconnectedUsers(userId);
    });
  }
}
