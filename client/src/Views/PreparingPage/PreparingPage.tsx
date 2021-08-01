import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ShipsContext } from '../../providers/shipsProvider';
import ShipsList from '../../components/Molecules/ShipsList/ShipsList';
import { Redirect, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { SocketContext } from '../../providers/socketProvider';
import { useEffect } from 'react';
import { useState } from 'react';
import { SortedUsers, User } from '../../Types/types';
import { routes } from '../../router/routes';
import PreparingPageStatusInfo from '../../components/Atoms/PreparingPageStatusInfo/PreparingPageStatusInfo';
import { ShipsListWrapper, StyledBoard, Wrapper } from './PreparingPage.styles';
import { ReadyButton } from '../../components/Atoms/Buttons/Buttons';
import ReadyImage from '../../components/Atoms/ReadyImage/ReadyImage';

const PreparingPage = () => {
  const { roomsList: roomsRoute, landingPage, game } = routes;
  const { state } = useLocation();
  const { socket } = useContext(SocketContext);
  const { ships } = useContext(ShipsContext);
  const [users, setUsers] = useState<User[]>([]);
  const [isCancelled, setIsCanceled] = useState(false);
  const [sortedUsers, setSortedUsers] = useState<SortedUsers>({ me: undefined, opponent: undefined });
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const linkState = state as any;
  const roomName = linkState ? linkState.roomName : '';

  useEffect(() => {
    socket?.emit('usersJoinTheRoom', roomName);
    socket?.on('usersStatusInRoom', (users) => {
      setUsers(users);
      socket.once('startGame', () => {
        setGameStarted(true);
      });
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
  useEffect(() => {
    sortUsers(users, socket?.id);
  }, [users, socket?.id]);

  const sortUsers = (users: User[], socketId: string | undefined) => {
    const sorted = {
      me: undefined,
      opponent: undefined,
    } as SortedUsers;
    socketId &&
      users.forEach((user) => {
        if (user.id === socketId) {
          sorted.me = user;
        } else {
          sorted.opponent = user;
        }
      });
    setSortedUsers(sorted);
  };

  if (!roomName) return <Redirect to={{ pathname: roomsRoute }} />;
  if (isCancelled) return <Redirect to={{ pathname: roomsRoute }} />;
  if (!socket) return <Redirect to={{ pathname: landingPage }} />;
  if (gameStarted) return <Redirect to={{ pathname: game }} />;

  return (
    <Wrapper>
      <PreparingPageStatusInfo sortedUsers={sortedUsers} />
      <DndProvider backend={HTML5Backend}>
        {sortedUsers.me?.status === 'ready' ? <ReadyImage /> : <StyledBoard />}
        <ShipsListWrapper>
          {ships.length === 10 ? (
            <ReadyButton isActive={true} onClick={handleSendBoard} className={sortedUsers.me?.status === 'ready' ? 'hide' : 'show'}>
              Ready
            </ReadyButton>
          ) : (
            <ShipsList />
          )}
        </ShipsListWrapper>
      </DndProvider>
    </Wrapper>
  );
};

export default PreparingPage;
