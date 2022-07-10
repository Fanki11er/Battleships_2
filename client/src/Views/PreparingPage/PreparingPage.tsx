import { DndProvider } from 'react-dnd';
import MultiBackend, { TouchTransition } from 'react-dnd-multi-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
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
import { RandomShipsButtonsWrapper, ShipsListWrapper, StyledBoard, Wrapper } from './PreparingPage.styles';
import { ReadyButton, ResetShipsButton, SetRandomShipsButton } from '../../components/Atoms/Buttons/Buttons';
import ReadyImage from '../../components/Atoms/ReadyImage/ReadyImage';
import { GameContext } from '../../providers/gameProvider';
import { UserContext } from '../../providers/userProvider';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { StyledQuestionMarkIcon } from '../../components/Atoms/RoomUserInfo/RoomUserInfo.styles';
import { handleClickEnter } from '../../Helpers/Helpers';
import useModal from '../../Hooks/useModal';
import HelpModal from '../../components/Organisms/HelpModal/HelpModal';
import { preparePageHelpPages } from '../../Data/HelpPages';

const PreparingPage = () => {
  const { roomsList: roomsRoute, landingPage, game } = routes;
  const { isGameStarted, isPreparationCanceled } = useContext(GameContext);
  const { socket } = useContext(SocketContext);
  const { ships, handleResetShips, setRandomShips } = useContext(ShipsContext);
  const [users, setUsers] = useState<User[]>([]);
  const { roomName } = useContext(UserContext);
  const [sortedUsers, setSortedUsers] = useState<SortedUsers>({ me: undefined, opponent: undefined });
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      users &&
      users.forEach((user) => {
        if (user.id === socketId) {
          sorted.me = user;
        } else {
          sorted.opponent = user;
        }
      });
    setSortedUsers(sorted);
  };

  const MyBackend = {
    backends: [
      {
        backend: HTML5Backend,
      },
      {
        backend: TouchBackend,

        delay: 100,
        preview: true,
        transition: TouchTransition,
      },
    ],
  };

  if (!roomName) return <Redirect to={{ pathname: roomsRoute }} />;
  if (isPreparationCanceled) return <Redirect to={{ pathname: roomsRoute }} />;
  if (!socket) return <Redirect to={{ pathname: landingPage }} />;
  if (isGameStarted) return <Redirect to={{ pathname: game }} />;

  return (
    <Wrapper>
      <StyledQuestionMarkIcon tabIndex={0} title={'Click for help'} onClick={handleOpenModal} onKeyUp={(e) => handleClickEnter(e, handleOpenModal)} />
      <HelpModal helpPages={preparePageHelpPages} isOpen={isOpen} closeModal={handleCloseModal} />
      <PreparingPageStatusInfo sortedUsers={sortedUsers} />
      {sortedUsers.me?.status === 'ready' ? null : (
        <RandomShipsButtonsWrapper>
          <SetRandomShipsButton isActive onClick={() => setRandomShips()} title={'Set ships by random'}>
            Randomize
          </SetRandomShipsButton>
          <ResetShipsButton isActive onClick={() => handleResetShips()} title={'Reset board'}>
            Reset Ships
          </ResetShipsButton>
        </RandomShipsButtonsWrapper>
      )}
      <DndProvider backend={MultiBackend as any} options={MyBackend}>
        {sortedUsers.me?.status === 'ready' ? <ReadyImage /> : <StyledBoard />}
        <ShipsListWrapper>
          {ships.length === 10 ? (
            <ReadyButton
              isActive={true}
              onClick={handleSendBoard}
              className={sortedUsers.me?.status === 'ready' ? 'hide' : 'show'}
              title={'Press when you are ready for the game'}
            >
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
