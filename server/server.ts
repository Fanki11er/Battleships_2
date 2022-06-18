import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';
import http from 'http';
import 'dotenv/config';
import sgMail from '@sendgrid/mail';
import { Room, SpecialRoom } from './Room/room';
import { Computer, User } from './User/user';
import { Helpers } from './Helpers/helpers';
import { Ship, Shot, ShotResult } from './Helpers/Types';

const SERVER_VERSION = '1.0.1';

const PORT = process.env.PORT || 8090;

sgMail.setApiKey(process.env.SENDGRID!);

const aiNames = Helpers.proceedAiNamesString(process.env.AI_NAMES) || ['R2-D2', 'C-3PO'];

const NUMBER_OF_ROOMS = process.env.NUMBER_OF_ROOMS || 4;

const sendingPeriod = Number(process.env.SENDING_PERIOD) || 10;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
/*app.get('/', (req, res) => {
  res.send('Server is running');
});*/
const rooms: Room[] = [];
let connectedUsers = 0;
let playedGames = 0;

server.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  console.log(`Server version: ${SERVER_VERSION}`);

  for (let i = 0; i < aiNames.length; i++) {
    rooms.push(new SpecialRoom(`Room_#AI${i + 1}`, new Computer(aiNames[i], `AIP#${i + 1}`)));
  }

  for (let i = 1; i <= NUMBER_OF_ROOMS; i++) {
    rooms.push(new Room(`Room_#${i}`));
  }
});

//? User Connection //

io.on('connection', (socket) => {
  connectedUsers++;
  console.log('Connections: ', connectedUsers);
  socket.on('joinRoom', ({ userName, roomName }) => {
    try {
      if (!userName || !roomName) {
        throw new Error('Invalid user parameters');
      }
      const user = new User(userName, socket.id);
      socket.join(roomName);
      const selectedRoom = Helpers.findSelectedRoom(rooms, roomName);
      user.setStatus('preparing');
      selectedRoom?.addUser(user);
      socket.emit('connectionAccepted', roomName);
      io.emit('userStatus', Helpers.sanitizeRooms(rooms));
    } catch (error) {
      socket.emit('serverError');
      console.log(error);
    }
  });

  socket.on('getRoomsList', () => {
    try {
      io.emit('RoomsList', Helpers.sanitizeRooms(rooms));
    } catch (error: any) {
      socket.emit('serverError');
      Helpers.sendEmail(sgMail, error.toString());
      console.log(error);
    }
  });

  socket.on('usersJoinTheRoom', (roomName) => {
    try {
      const selectedRoom = Helpers.findSelectedRoom(rooms, roomName);
      if (selectedRoom) io.to(selectedRoom.getRoomName()).emit('usersStatusInRoom', selectedRoom.getUsers());
    } catch (error: any) {
      socket.emit('serverError');
      Helpers.sendEmail(sgMail, error.toString());
      console.log(error);
    }
  });

  socket.on('leaveTheRoom', (roomName) => {
    try {
      socket.leave(roomName);
      Helpers.removeDisconnectedUser(rooms, socket.id);
      io.emit('RoomsList', Helpers.sanitizeRooms(rooms));
      const selectedRoom = Helpers.findSelectedRoom(rooms, roomName);
      Helpers.resetBoard(socket.id, selectedRoom);
      if (selectedRoom) io.to(selectedRoom.getRoomName()).emit('usersStatusInRoom', selectedRoom.getUsers());
      if (selectedRoom?.getGame()) {
        Helpers.cancelGame(selectedRoom, io);
      }
    } catch (error: any) {
      socket.emit('serverError');
      Helpers.sendEmail(sgMail, error.toString());
      console.log(error);
    }
  });

  socket.on('setBoard', (ships: Ship[]) => {
    const roomName = Helpers.findRoomNameByUserId(rooms, socket.id);
    const selectedRoom = Helpers.findSelectedRoom(rooms, roomName);
    let areUsersReady: boolean | undefined = false;

    try {
      const board = selectedRoom?.getFreeBoard();
      board?.pushShips(ships);
      board?.setUserId(socket.id);
      selectedRoom?.changeUserStatus(socket.id, 'ready');
    } catch (error: any) {
      socket.emit('serverError');
      Helpers.sendEmail(sgMail, error.toString());
      console.log(error);
    }

    try {
      if (selectedRoom) io.to(selectedRoom.getRoomName()).emit('usersStatusInRoom', selectedRoom.getUsers());
      io.emit('userStatus', Helpers.sanitizeRooms(rooms));
      areUsersReady = selectedRoom?.areUsersReady();
      if (areUsersReady && selectedRoom) {
        selectedRoom.startGame();
        selectedRoom.getGame()?.getCurrentPlayer();
        setTimeout(() => {
          selectedRoom.setIsLocked(true);
          io.to(selectedRoom.getRoomName()).emit('startGame', selectedRoom.getGame()?.getCurrentPlayer());
        }, 2000);
        playedGames++;
        if (playedGames % sendingPeriod === 0 && playedGames != 0) {
          Helpers.sendEmail(sgMail, `Played games: ${playedGames}`, 'Played games info');
        }
        console.log('Played games: ', playedGames);
      }
    } catch (error: any) {
      socket.emit('serverError');
      Helpers.sendEmail(sgMail, error.toString());
      console.log(error);
    }
  });

  socket.on('shot', (shot: Shot) => {
    try {
      if (!shot.coordinates || !shot.userId) {
        throw new Error('Invalid shot parameters');
      }
      let shotResult: ShotResult | undefined;
      const roomName = Helpers.findRoomNameByUserId(rooms, socket.id);
      const selectedRoom = Helpers.findSelectedRoom(rooms, roomName);
      const game = selectedRoom?.getGame();
      shotResult = game?.handleShot(shot);
      const currentPlayer = game?.getCurrentPlayer();
      const winner = game?.isSomeBodyWon();

      if (selectedRoom && shotResult) {
        io.to(selectedRoom.getRoomName()).emit('shotResult', {
          shotResult,
          currentPlayer,
        });
      }

      if (winner && selectedRoom) {
        io.to(selectedRoom.getRoomName()).emit('Winner', winner);
        setTimeout(() => {
          io.to(selectedRoom.getRoomName()).emit('GameEnded');
          selectedRoom.endGame();
          selectedRoom.resetUsers();
          selectedRoom.setIsLocked(false);
        }, 6000);
      }
    } catch (error: any) {
      socket.emit('serverError');
      Helpers.sendEmail(sgMail, error.toString());
      console.log(error);
    }
  });

  socket.on('requestAIShot', () => {
    try {
      let shotResult: ShotResult | undefined;
      let currentPlayer: string | undefined;
      const roomName = Helpers.findRoomNameByUserId(rooms, socket.id);
      const selectedRoom = Helpers.findSelectedRoom(rooms, roomName);
      const game = selectedRoom?.getGame();
      currentPlayer = game?.getCurrentPlayer();
      if (currentPlayer) {
        const ai = game?.getPlayerById(currentPlayer) as Computer | undefined;

        if (ai && ai.getIsComputer()) {
          const shot: Shot = ai.takeAShot();
          shotResult = game?.handleShot(shot);
          ai.checkShotResult(shotResult);
        }
      } else {
        console.log('SOME WEIRD ERROR');
      }
      currentPlayer = game?.getCurrentPlayer();
      const winner = game?.isSomeBodyWon();

      if (selectedRoom && shotResult) {
        setTimeout(() => {
          io.to(selectedRoom.getRoomName()).emit('shotResult', {
            shotResult,
            currentPlayer,
          });
        }, 1000);
      }
      if (winner && selectedRoom) {
        io.to(selectedRoom.getRoomName()).emit('Winner', winner);
        setTimeout(() => {
          io.to(selectedRoom.getRoomName()).emit('GameEnded');
          selectedRoom.endGame();
          selectedRoom.resetUsers();
          selectedRoom.setIsLocked(false);
        }, 8000);
      }
    } catch (error: any) {
      socket.emit('serverError');
      Helpers.sendEmail(sgMail, error.toString());
      console.log(error);
    }
  });

  //? User disconnection //

  socket.on('disconnect', () => {
    try {
      const roomName = Helpers.findRoomNameByUserId(rooms, socket.id);
      const selectedRoom = Helpers.findSelectedRoom(rooms, roomName);
      Helpers.removeDisconnectedUser(rooms, socket.id);
      Helpers.resetBoard(socket.id, selectedRoom);

      if (selectedRoom?.getGame()) {
        Helpers.cancelGame(selectedRoom, io);
      }

      socket.leave(roomName);
      socket.broadcast.emit('usersStatusInRoom', selectedRoom?.getUsers());
      io.emit('userStatus', Helpers.sanitizeRooms(rooms));
    } catch (error: any) {
      socket.emit('serverError');
      Helpers.sendEmail(sgMail, error.toString());
      console.log(error);
    }
  });
});

server.on('error', (error) => {
  console.log('Server', error);
  Helpers.sendEmail(sgMail, error.toString());
});
