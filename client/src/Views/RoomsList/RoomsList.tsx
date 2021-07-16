import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Room from '../../components/Organisms/Room/Room';
import useSocket from '../../Hooks/useSocket';
import { RoomType } from '../../Types/types';

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
  const socket = useSocket('http://localhost:8090');
  const [roomsList, setRoomsList] = useState<RoomType[]>([]);

  useEffect(() => {
    socket?.on('RoomsList', (rooms: RoomType[]) => {
      setRoomsList(rooms);
    });
  }, [socket, roomsList]);
  return (
    <Wrapper>
      {roomsList.length ? (
        roomsList.map(({ roomName, users }) => {
          return <Room roomName={roomName} users={users} key={roomName} />;
        })
      ) : (
        <div>Sorry... something went wrong</div>
      )}
    </Wrapper>
  );
};

export default RoomsList;
/*useEffect(() => {
    socket?.emit('joinRoom', { userName: 'Krzysiek', roomName: 'TestRoom' });
  }, [socket]);*/
