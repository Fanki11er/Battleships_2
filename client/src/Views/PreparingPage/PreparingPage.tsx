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
import PreparingPageStatusInfo from '../../components/Atoms/PreparingPageStatusInfo/PreparingPageStatusInfo';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 33% 1fr 33%;
  grid-template-rows: 75% 1fr;
  justify-content: center;
  align-items: center;
  padding: 0 35px;
`;

const StyledBoard = styled(Board)`
  grid-column: 2/3;
  grid-row: 1/2;
`;

const ShipsListWrapper = styled.div`
  display: flex;
  grid-column: 1/5;
  grid-row: 2/3;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const PreparingPage = () => {
  const { roomsList: roomsRoute, landingPage } = routes;
  const { state } = useLocation();
  const { socket } = useContext(SocketContext);
  const { ships } = useContext(ShipsContext);
  const [users, setUsers] = useState<User[]>([]);
  const [isCancelled, setIsCanceled] = useState(false);
  //const [indexes, setIndexes] = useState({ myIndex: undefined, opponentIndex: undefined });

  const linkState = state as any;
  const roomName = linkState ? linkState.roomName : '';

  useEffect(() => {
    socket?.emit('usersJoinTheRoom', roomName);
    socket?.on('usersStatusInRoom', (users) => {
      setUsers(users);
      // witchIsMyIndex(users, socket?.id);
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

  /*const witchIsMyIndex = (users: User[], socketId: string | undefined) => {
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
  };*/

  if (!roomName) return <Redirect to={{ pathname: roomsRoute }} />;
  if (isCancelled) return <Redirect to={{ pathname: roomsRoute }} />;
  if (!socket) return <Redirect to={{ pathname: landingPage }} />;

  return (
    <Wrapper>
      <PreparingPageStatusInfo users={users} socketId={socket!.id} />
      <DndProvider backend={HTML5Backend}>
        <StyledBoard />
        <ShipsListWrapper>
          <ShipsList />
        </ShipsListWrapper>
      </DndProvider>
    </Wrapper>
  );
};

export default PreparingPage;
