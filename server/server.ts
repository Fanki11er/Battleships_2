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
  const room = new Room("TestRoom");
  rooms.push(room);
});

//? User Connection //

io.on("connection", (socket) => {
  socket.emit("RoomsList", rooms);
  socket.on("joinRoom", ({ userName, roomName }) => {
    const user = new User(userName, socket.id);
    socket.join(roomName);
    const selectedRoom = Helpers.findSelectedRoom(rooms, roomName);
    user.setStatus("preparing")
    selectedRoom?.addUser(user);
    socket.emit('connectionAccepted', roomName);
    io.emit("userStatus", rooms)
    socket.emit("usersStatusInRoom",selectedRoom?.getUsers() )
  });
  //socket.emit("message", "Hello new user");
  //? User disconnection //

  socket.on("disconnect", () => {
    //io.emit("message", "User disconnected");
    Helpers.removeDisconnectedUser(rooms, socket.id);
    io.emit("userStatus", rooms);
  });
});
