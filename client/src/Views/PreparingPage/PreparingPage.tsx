import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ShipsContext } from '../../providers/shipsProvider';
import ShipsList from '../../components/Molecules/ShipsList/ShipsList';
import { Redirect, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { SocketContext } from '../../providers/socketProvider';
import { useEffect } from 'react';
import { useState } from 'react';
import { User } from '../../Types/types';
import { routes } from '../../router/routes';
import PreparingPageStatusInfo from '../../components/Atoms/PreparingPageStatusInfo/PreparingPageStatusInfo';
import { ShipsListWrapper, StyledBoard, Wrapper } from './PreparingPage.styles';

const PreparingPage = () => {
  const { roomsList: roomsRoute, landingPage } = routes;
  const { state } = useLocation();
  const { socket } = useContext(SocketContext);
  const { ships } = useContext(ShipsContext);
  const [users, setUsers] = useState<User[]>([]);
  const [isCancelled, setIsCanceled] = useState(false);

  const linkState = state as any;
  const roomName = linkState ? linkState.roomName : '';

  useEffect(() => {
    socket?.emit('usersJoinTheRoom', roomName);
    socket?.on('usersStatusInRoom', (users) => {
      setUsers(users);
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
