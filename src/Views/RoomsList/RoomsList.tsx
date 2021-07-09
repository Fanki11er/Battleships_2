import React, { useEffect, useState } from 'react';
//import styled from 'styled-components';
import useSocket from '../../Hooks/useSocket';

const RoomsList = () => {
  const socket = useSocket('http://localhost:8090');
  const [roomsList, setRoomsList] = useState<[]>([]);
  useEffect(() => {
    socket?.emit('joinRoom', { userName: 'Krzysiek', roomName: 'TestRoom' });
  }, [socket]);

  useEffect(() => {
    socket?.on('RoomsList', (rooms: []) => {
      setRoomsList(rooms);
    });
    console.log(roomsList);
  }, [socket, roomsList]);
  return <div>RoomsList</div>;
};

export default RoomsList;
