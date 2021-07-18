import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';
import { ShipsContext } from '../../providers/shipsProvider';
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
  const [indexes, setIndexes] = useState({ myIndex: undefined, opponentIndex: undefined });

  const linkState = state as any;
  const roomName = linkState ? linkState.roomName : '';

  useEffect(() => {
    socket?.emit('usersJoinTheRoom', roomName);
    socket?.on('usersStatusInRoom', (users) => {
      setUsers(users);
      witchIsMyIndex(users, socket?.id);
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

  const witchIsMyIndex = (users: User[], socketId: string | undefined) => {
    let myIndex = undefined;
    let opponentIndex = undefined;
    socketId &&
      users.forEach(({ id }, index) => {
        if (id === socketId) {
          myIndex = index;
        } else {
          opponentIndex = index;
        }
      });
    setIndexes({ myIndex, opponentIndex });
  };

  if (!roomName) return <Redirect to={{ pathname: roomsRoute }} />;
  if (isCancelled) return <Redirect to={{ pathname: roomsRoute }} />;

  return (
    <Wrapper>
      <StatusWrapper>
        <UserInfo>
          <div>{`Your status: ${indexes.myIndex !== undefined ? users[indexes.myIndex!]?.status : ''}`}</div>
          <div>{`Opponent status: ${indexes.opponentIndex !== undefined ? users[indexes.opponentIndex!]?.status : 'No opponent'}`}</div>
          <StandardButton isActive={true} onClick={handleLeaveTheRoom}>
            Back
          </StandardButton>
        </UserInfo>
      </StatusWrapper>
      <BoardWrapper>
        <DndProvider backend={HTML5Backend}>
          <Board></Board>
          <StandardButton isActive={true} onClick={handleSendBoard}>
            Send board
          </StandardButton>
          <ShipsList />
        </DndProvider>
      </BoardWrapper>
    </Wrapper>
  );
};

export default PreparingPage;
