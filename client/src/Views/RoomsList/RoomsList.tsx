import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Room from '../../components/Organisms/Room/Room';
import useSocket from '../../Hooks/useSocket';
import { RoomType } from '../../Types/types';
import { routes } from '../../router/routes';
import { useContext } from 'react';
import { SocketContext } from '../../providers/socketProvider';

const Wrapper = styled.div`
  width: 70%;
  height: 70%;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-flow: wrap row;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const RoomsList = () => {
  const { room } = routes;
  const [roomsList, setRoomsList] = useState<RoomType[]>([]);
  const [roomToJoin, setRoomToJoin] = useState('');
  const { socket } = useContext(SocketContext);
  useEffect(() => {
    socket?.on('RoomsList', (rooms: RoomType[]) => {
      setRoomsList(rooms);
    });

    socket?.once('connectionAccepted', (roomName: string) => {
      setRoomToJoin(roomName);
    });
    socket?.on('userStatus', (rooms) => {
      setRoomsList(rooms);
    });
    return () => {
      socket?.off('RoomsList');
      socket?.off('userStatus');
      socket?.off('connectionAccepted');
    };
  }, [socket]);

  const handleJoinToTheRoom = (roomName: string) => {
    socket?.emit('joinRoom', { userName: 'Krzysiek', roomName });
  };

  if (roomToJoin) return <Redirect to={{ pathname: room, state: { roomName: roomToJoin } }} />;
  return (
    <Wrapper>
      {roomsList.length ? (
        roomsList.map(({ roomName, users }) => {
          return <Room roomName={roomName} users={users} key={roomName} handleJoinToTheRoom={handleJoinToTheRoom} />;
        })
      ) : (
        <div>Sorry... something went wrong</div>
      )}
    </Wrapper>
  );
};

export default RoomsList;
