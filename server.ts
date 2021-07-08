import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import http from "http";

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

server.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

io.on("connection", (socket) => {
  console.log("New user connected :)");
  socket.emit("message", "Hello new user");
  socket.on("disconnect", () => {
    io.emit("message", "User disconnected");
  });
});
