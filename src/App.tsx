import React from 'react';
import { useEffect } from 'react';
//import axios from "axios";
import { io, Socket } from 'socket.io-client';
import { useState } from 'react';

function App() {
  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  const [roomsList, setRoomsList] = useState<[]>([]);

  /*useEffect(() => {
    axios.get("http://localhost:8090").then(({ data }) => { 
      console.log(data);
    }); 
  }, []);*/
  useEffect(() => {
    setSocket(io('http://localhost:8090'));
  }, []);

  useEffect(() => {
    socket?.emit('joinRoom', { userName: 'Krzysiek', roomName: 'TestRoom' });
  }, [socket]);

  useEffect(() => {
    socket?.on('RoomsList', (rooms: []) => {
      setRoomsList(rooms);
    });
    console.log(roomsList);
  }, [socket, roomsList]);

  return <div>BattleShip2</div>;
}

export default App;
