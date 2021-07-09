import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import http from "http";
import { Room } from "./Room/room";
import { User } from "./User/user";

const PORT = 8090 || process.env.PORT;
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

io.on("connection", (socket) => {
  socket.on("joinRoom", ({ userName, room }) => {
    const user = new User(userName, socket.id);
    socket.join(room);
    const selectedRoom = rooms.find((currentRoom) => {
      return currentRoom.getRoomName() === room;
    });
    selectedRoom?.addUser(user);
    socket.emit("RoomsList", rooms);
  });
  console.log("New user connected :)");
  socket.emit("message", "Hello new user");
  socket.on("disconnect", () => {
    io.emit("message", "User disconnected");
  });
});
