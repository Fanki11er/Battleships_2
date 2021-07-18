import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';
import ShipsProvider, { ShipsContext } from '../../providers/shipsProvider';
import ShipsList from '../../components/Molecules/ShipsList/ShipsList';
import Board from '../../components/Organisms/Board/Board';
import { Redirect, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { SocketContext } from '../../providers/socketProvider';
import { useEffect } from 'react';
import { useState } from 'react';
import { User } from '../../Types/types';
import { routes } from '../../router/routes';
import { StandardButton } from '../../components/Atoms/Buttons/Buttons';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const StatusWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
`;

const UserInfo = styled.div`
  display: flex;
  width: 800px;
  justify-content: space-around;
  align-items: center;
`;

const PreparingPage = () => {
  const { roomsList: roomsRoute } = routes;
  const { state } = useLocation();
  const { socket } = useContext(SocketContext);
  const { ships } = useContext(ShipsContext);
  const [users, setUsers] = useState<User[]>([]);
  const [isCancelled, setIsCanceled] = useState(false);
  const linkState = state as any;
  const roomName = linkState ? linkState.roomName : '';

  useEffect(() => {
    socket?.emit('usersJoinTheRoom', roomName);
    socket?.on('usersStatusInRoom', (users: User[]) => {
      const newUsers: User[] = [];
      users.forEach((user) => {
        if (user.id === socket.id) {
          newUsers[0] = user;
        } else {
          newUsers[1] = user;
        }
      });
      setUsers(newUsers);
    });

    return () => {
      socket?.off('usersStatusInRoom');
    };
  }, [socket, roomName]);

  const handleLeaveTheRoom = () => {
    setIsCanceled(true);
    socket?.emit('leaveTheRoom', roomName);
  };

  const handleSendBoard = () => {
    socket?.emit('setBoard', ships);
  };

  if (!roomName) return <Redirect to={{ pathname: roomsRoute }} />;
  if (isCancelled) return <Redirect to={{ pathname: roomsRoute }} />;

  return (
    <Wrapper>
      <StatusWrapper>
        <UserInfo>
          <div>{`Your status: ${users && users.length && users[0].status}`}</div>
          <div>{`Opponent status: ${users && users.length && users.length > 1 ? users[1].status : 'No opponent'}`}</div>
          <StandardButton onClick={handleLeaveTheRoom}>Back</StandardButton>
        </UserInfo>
      </StatusWrapper>
      <BoardWrapper>
        <DndProvider backend={HTML5Backend}>
          <Board></Board>
          <StandardButton onClick={handleSendBoard}>Send board</StandardButton>
          <ShipsList />
        </DndProvider>
      </BoardWrapper>
    </Wrapper>
  );
};

export default PreparingPage;
