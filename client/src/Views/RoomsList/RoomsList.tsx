import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Room from '../../components/Organisms/Room/Room';
import { RoomType } from '../../Types/types';
import { routes } from '../../router/routes';
import { useContext } from 'react';
import { SocketContext } from '../../providers/socketProvider';
import LoadingInfo from '../../components/Atoms/LoadingInfo/LoadingInfo';
import { Wrapper } from './RoomsList.styles';
import { UserContext } from '../../providers/userProvider';

type Status = 'loading' | 'ready' | 'error';

const RoomsList = () => {
  const { room, landingPage } = routes;
  const [roomsList, setRoomsList] = useState<RoomType[]>([]);
  const { socket } = useContext(SocketContext);
  const [status, setStatus] = useState<Status>('loading');
  const { userName, roomName, handleSetRoomName } = useContext(UserContext);

  useEffect(() => {
    handleSetRoomName('');
  }, [handleSetRoomName]);

  useEffect(() => {
    socket?.connect();
    socket?.emit('getRoomsList');
    socket?.on('RoomsList', (rooms: RoomType[]) => {
      setRoomsList(rooms);
      rooms.length ? setStatus('ready') : setStatus('error');
    });
    socket?.once('connectionAccepted', (roomName: string) => {
      handleSetRoomName(roomName);
    });
    socket?.on('userStatus', (rooms) => {
      setRoomsList(rooms);
    });
    return () => {
      socket?.off('RoomsList');
      socket?.off('userStatus');
      socket?.off('connectionAccepted');
    };
  }, [socket, handleSetRoomName]);

  const handleJoinToTheRoom = (roomName: string) => {
    socket?.emit('joinRoom', { userName: userName, roomName });
  };

  if (!userName) return <Redirect to={{ pathname: landingPage }} />;

  if (roomName) return <Redirect to={{ pathname: room, state: { roomName } }} />;
  return (
    <Wrapper>
      {status === 'loading' && <LoadingInfo />}
      {status === 'ready' &&
        roomsList.length &&
        roomsList.map(({ roomName, users }) => {
          return <Room roomName={roomName} users={users} key={roomName} handleJoinToTheRoom={handleJoinToTheRoom} />;
        })}
      {status === 'error' && <div>Sorry... something went wrong</div>}
    </Wrapper>
  );
};

export default RoomsList;
