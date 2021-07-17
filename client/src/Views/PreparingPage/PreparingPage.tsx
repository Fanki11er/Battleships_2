import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';
import ShipsProvider from '../../providers/shipsProvider';
import ShipsList from '../../components/Molecules/ShipsList/ShipsList';
import Board from '../../components/Organisms/Board/Board';
import { Redirect, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { SocketContext } from '../../providers/socketProvider';
import { useEffect } from 'react';
import { useState } from 'react';
import { User } from '../../Types/types';
import { routes } from '../../router/routes';

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
  width: 400px;
  justify-content: space-around;
  align-items: center;
`;

const PreparingPage = () => {
  const { roomsList: roomsRoute } = routes;
  const { state } = useLocation();
  const { socket } = useContext(SocketContext);
  const [users, setUsers] = useState<User[]>([]);
  const linkState = state as any;
  const roomName = linkState ? linkState.roomName : '';
  const [isCancelled, setIsCanceled] = useState(false);

  useEffect(() => {
    socket?.emit('usersJoinTheRoom', roomName);
    socket?.on('usersStatusInRoom', (users) => {
      setUsers(users);
    });
  }, [socket, roomName]);

  const handleTest = () => {
    setIsCanceled(true);
    socket?.emit('leaveTheRoom', roomName);
  };

  if (!roomName) return <Redirect to={{ pathname: roomsRoute }} />;
  if (isCancelled) return <Redirect to={{ pathname: roomsRoute }} />;

  return (
    <Wrapper>
      <StatusWrapper>
        <UserInfo>
          <div>{`Your status: ${users.length && users[0].status}`}</div>
          <div>{`Opponent status: ${users.length > 1 ? users[1].status : 'No opponent'}`}</div>
        </UserInfo>
      </StatusWrapper>
      <BoardWrapper>
        <DndProvider backend={HTML5Backend}>
          <ShipsProvider>
            <Board></Board>
            <ShipsList />
          </ShipsProvider>
        </DndProvider>
      </BoardWrapper>
      <button onClick={handleTest}>test</button>
    </Wrapper>
  );
};

export default PreparingPage;
