import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import http from "http";
import { Room } from "./Room/room";
import { User } from "./User/user";
import { Helpers } from "./Helpers/helpers";

const PORT = 8090 || process.env.PORT;
const USER_STATUSES = {
  preparing: 'preparing',
  ready: 'ready'
}
const NUMBER_OF_ROOMS = 2;
const BOARD_SIZE = 5;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.get("/", (req, res) => {
  res.send("Server is running");
});
const rooms: Room[] = [];

server.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);

  for(let i= 1; i<= NUMBER_OF_ROOMS; i++ ){
    rooms.push(new Room(`Room_#${i}`, BOARD_SIZE))
  }
  
});

//? User Connection //

io.on("connection", (socket) => {
  io.emit("RoomsList", Helpers.sanitizeRooms(rooms));
  socket.on("joinRoom", ({ userName, roomName }) => {
    const user = new User(userName, socket.id);
    socket.join(roomName);
    const selectedRoom = Helpers.findSelectedRoom( rooms, roomName);
    user.setStatus("preparing")
    selectedRoom?.addUser(user);
    socket.emit('connectionAccepted', roomName);
    io.emit("userStatus",  Helpers.sanitizeRooms(rooms))
    
  });

  socket.on('usersJoinTheRoom', (roomName)=> {
    const selectedRoom = Helpers.findSelectedRoom( rooms, roomName);
   if(selectedRoom) io.to(selectedRoom.getRoomName()).emit("usersStatusInRoom", selectedRoom.getUsers())
    //if(selectedRoom) socket.broadcast.to(selectedRoom?.getRoomName()).emit ("usersStatusInRoom", selectedRoom?.getUsers())
    //io.emit('leaveTheRoom')
  })

  socket.on('leaveTheRoom', (roomName)=> {
   const sanitizedRooms =  Helpers.sanitizeRooms(rooms);
    socket.leave(roomName)
    Helpers.removeDisconnectedUser(rooms, socket.id);
    io.emit("RoomsList", sanitizedRooms);
    const selectedRoom = Helpers.findSelectedRoom(rooms, roomName);
    if(selectedRoom)  io.to(selectedRoom.getRoomName()).emit("usersStatusInRoom", selectedRoom.getUsers())
   // socket.broadcast.emit("usersStatusInRoom", selectedRoom?.getUsers())
  })

  socket.on('setBoard', (ships, )=> {
    console.log('SET')
    const roomName = Helpers.findRoomNameByUserId(rooms, socket.id)
    const selectedRoom = Helpers.findSelectedRoom(rooms, roomName);
    

      const board = selectedRoom?.getFreeBoard()
      board?.pushShips(ships);
      board?.setUserId(socket.id)

      //!Add removing user from board when disconnected or ends the game
    
    console.log(rooms[0].getBoards()[0].hasUserId(), "b1");
      console.log(rooms[0].getBoards()[1].hasUserId(), "b2");
  })

  //? User disconnection //

  socket.on("disconnect", () => {
    const sanitizedRooms =  Helpers.sanitizeRooms(rooms);
    //io.emit("message", "User disconnected");
    const roomName = Helpers.findRoomNameByUserId(rooms, socket.id)
    const selectedRoom = Helpers.findSelectedRoom(rooms, roomName);
    Helpers.removeDisconnectedUser(rooms, socket.id);
    socket.leave(roomName)
    socket.broadcast.emit("usersStatusInRoom", selectedRoom?.getUsers())
    
    io.emit("userStatus", sanitizedRooms);
  });
 
});
