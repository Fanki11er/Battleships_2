import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';
import ShipsProvider from '../../providers/shipsProvider';
import ShipsList from '../../components/Molecules/ShipsList/ShipsList';
import Board from '../../components/Organisms/Board/Board';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { SocketContext } from '../../providers/socketProvider';
import { useEffect } from 'react';
import { useState } from 'react';
import { User } from '../../Types/types';

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
  const { state } = useLocation();
  const { socket } = useContext(SocketContext);
  const [users, setUsers] = useState<User[]>([]);
  const test = state as any;
  const { roomName } = test;

  useEffect(() => {
    socket?.emit('usersJoinTheRoom', roomName);
    socket?.on('usersStatusInRoom', (users) => {
      setUsers(users);
    });
  }, [socket, roomName]);

  return (
    <Wrapper>
      <StatusWrapper>
        <UserInfo>
          <div>{`Your status: ${users[0] && users[0].status}`}</div>
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
    </Wrapper>
  );
};

export default PreparingPage;
