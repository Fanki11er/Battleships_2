import { Server, Socket } from 'socket.io';
import { BattleShip } from '../Battleship/Battleship';
import { Room } from '../Room/room';
import { Coordinates, Position, RandomShipCoordinates, RoomInfo, Shot, ShotResult } from './Types';

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
    let roomName = '';
    rooms.forEach((room) => {
      const test = room.hasUser(userId);
      if (room.hasUser(userId)) {
        roomName = room.getRoomName();
      }
    });
    return roomName;
  }

  public static sanitizeRooms(rooms: Room[]) {
    const sanitizedRooms: any = [];
    rooms.forEach((room) => {
      sanitizedRooms.push(room.getSanitized());
    });
    return sanitizedRooms;
  }

  public static resetBoard(userId: string, selectedRoom: Room | undefined) {
    selectedRoom?.getBoards().forEach((board) => {
      if (board.getUserId() === userId) {
        board.resetBoard();
      }
    });
  }

  public static cancelGame = (selectedRoom: Room, io: Server) => {
    selectedRoom.getUsers().forEach((user) => {
      selectedRoom.getGame()?.setTheWinner(user.getId());
    });
    const winner = selectedRoom.getGame()!.isSomeBodyWon();
    io.to(selectedRoom.getRoomName()).emit('Winner', winner);
    setTimeout(() => {
      io.to(selectedRoom.getRoomName()).emit('GameEnded');
      selectedRoom.endGame();
      selectedRoom.resetUsers();
      selectedRoom.setIsLocked(false);
    }, 5000);
  };
}

const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max + 1);
};

const getRandomCoordinate = (max: number): RandomShipCoordinates => {
  let randomX;
  let randomY;
  const orientation: Position = getRandomNumber(100) % 2 === 0 ? 'horizontal' : 'vertical';

  if (orientation === 'horizontal') {
    randomY = getRandomNumber(max);
    randomX = getRandomNumber(10);
  } else {
    randomY = getRandomNumber(10);
    randomX = getRandomNumber(max);
  }

  return {
    randomX,
    randomY,
    orientation,
  };
};

const isThereCollision = (usedCoordinates: Coordinates[], coordinates: Coordinates, size: number, orientation: Position) => {
  const extendedCoordinates = extendStartCoordinates(size, coordinates, orientation);
  for (let i = 0; i < extendedCoordinates.length; i++) {
    const { x: newX, y: newY } = extendedCoordinates[i];
    const collisions = usedCoordinates.filter(({ x, y }) => {
      return x === newX && y === newY;
    });
    if (collisions.length) {
      return true;
    }
  }

  return false;
};
const extendStartCoordinates = (size: number, startCoordinates: Coordinates, orientation: Position) => {
  const coordinates: Coordinates[] = [];
  coordinates.push(startCoordinates);
  const { x, y } = startCoordinates;
  for (let i = 1; i < size; i++) {
    if (orientation === 'vertical') {
      coordinates.push({ x: x + i, y });
    } else {
      coordinates.push({ x, y: y + i });
    }
  }
  return coordinates;
};

export const setComputerShips = (shipSizes: number[]) => {
  const ships: BattleShip[] = [];
  const usedCoordinates: Coordinates[] = [];
  const sizes = [...shipSizes];

  while (sizes.length) {
    const coordinates = getRandomCoordinate(sizes[0]);
    if (!isThereCollision(usedCoordinates, { x: coordinates.randomX, y: coordinates.randomY }, sizes[0], coordinates.orientation)) {
      const ship = new BattleShip(
        extendStartCoordinates(sizes[0], { x: coordinates.randomX, y: coordinates.randomY }, coordinates.orientation),
        sizes[0]
      );
      ships.push(ship);
      sizes.shift();
      usedCoordinates.push(...ship.coordinates);
    }
  }
  return ships;
};
