import { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { LoseStatus, WonStatus } from '../../components/Atoms/EndGameStatus/EndGameStatus';
import TurnIndicator from '../../components/Atoms/TurnIndicator/TurnIndicator';
import ShipsLeftList from '../../components/Molecules/ShipsLeftList/ShipsLeftList';
import Modal from '../../components/Organisms/Modal/Modal';
import TargetingBoard from '../../components/Organisms/TargetingBoard/TrgetingBoard';
import UserGameBoard from '../../components/Organisms/UserGameBoard/UserGameBoard';
import useModal from '../../Hooks/useModal';
import { GameContext } from '../../providers/gameProvider';
import { SocketContext } from '../../providers/socketProvider';
import { routes } from '../../router/routes';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1.6fr 160px 1fr 160px 1.6fr;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
`;

const StyledMyList = styled(ShipsLeftList)`
  grid-row: 1/2;
  grid-column: 2/3;
`;

const StyledOpponentList = styled(ShipsLeftList)`
  grid-row: 1/2;
  grid-column: 2/3;
`;

const Game = () => {
  const { roomsList } = routes;
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { winner, isGameStarted, myShipsList, opponentShipsList } = useContext(GameContext);
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    if (winner) {
      handleOpenModal();
    }

    return () => {
      handleCloseModal();
    };
  }, [winner, handleCloseModal, handleOpenModal]);

  if (!isGameStarted) {
    return <Redirect to={{ pathname: roomsList }} />;
  }
  return (
    <Wrapper>
      <UserGameBoard />
      <StyledMyList shipsLeft={myShipsList} />
      <StyledOpponentList shipsLeft={opponentShipsList} />
      <TargetingBoard />
      <TurnIndicator />
      {isOpen && socket ? <Modal>{socket?.id === winner ? <WonStatus /> : <LoseStatus />}</Modal> : null}
    </Wrapper>
  );
};

export default Game;
