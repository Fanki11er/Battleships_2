import React from "react";
import { useEffect } from "react";
//import axios from "axios";
import { io, Socket } from "socket.io-client";
import { useState } from "react";

function App() {
  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  /*useEffect(() => {
    axios.get("http://localhost:8090").then(({ data }) => {
      console.log(data);
    });
  }, []);*/
  useEffect(() => {
    setSocket(io("http://localhost:8090"));
  }, []);

  useEffect(() => {
    socket &&
      socket.on("message", (message) => {
        console.log(message);
      });
  }, [socket]);
  return <div>BattleShip2</div>;
}

export default App;
