import { DndProvider } from 'react-dnd';
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/cjs/HTML5toTouch';
import { ShipsContext } from '../../providers/shipsProvider';
import ShipsList from '../../components/Molecules/ShipsList/ShipsList';
import { Redirect } from 'react-router-dom';
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
import { GameContext } from '../../providers/gameProvider';
import { UserContext } from '../../providers/userProvider';

const PreparingPage = () => {
  const { roomsList: roomsRoute, landingPage, game } = routes;
  const { isGameStarted, isPreparationCanceled } = useContext(GameContext);
  const { socket } = useContext(SocketContext);
  const { ships, handleResetShips } = useContext(ShipsContext);
  const [users, setUsers] = useState<User[]>([]);
  const { roomName } = useContext(UserContext);
  const [sortedUsers, setSortedUsers] = useState<SortedUsers>({ me: undefined, opponent: undefined });

  useEffect(() => {
    socket?.emit('usersJoinTheRoom', roomName);
    socket?.on('usersStatusInRoom', (users) => {
      setUsers(users);
    });

    return () => {
      socket?.off('usersStatusInRoom');
    };
  }, [socket, roomName]);
  useEffect(() => {
    handleResetShips();
  }, [handleResetShips]);

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
  if (isPreparationCanceled) return <Redirect to={{ pathname: roomsRoute }} />;
  if (!socket) return <Redirect to={{ pathname: landingPage }} />;
  if (isGameStarted) return <Redirect to={{ pathname: game }} />;

  return (
    <Wrapper>
      <PreparingPageStatusInfo sortedUsers={sortedUsers} />
      <DndProvider backend={MultiBackend as any} options={HTML5toTouch}>
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
