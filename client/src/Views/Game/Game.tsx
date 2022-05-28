import { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { StyledMyList, StyledOpponentList, Wrapper } from './Game.styles';
import { LoseStatus, WonStatus } from '../../components/Atoms/EndGameStatus/EndGameStatus';
import TurnIndicator from '../../components/Atoms/TurnIndicator/TurnIndicator';
import Modal from '../../components/Organisms/Modal/Modal';
import TargetingBoard from '../../components/Organisms/TargetingBoard/TrgetingBoard';
import UserGameBoard from '../../components/Organisms/UserGameBoard/UserGameBoard';
import useModal from '../../Hooks/useModal';
import { GameContext } from '../../providers/gameProvider';
import { SocketContext } from '../../providers/socketProvider';
import { routes } from '../../router/routes';

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
      <TurnIndicator />
      <TargetingBoard />
      <StyledOpponentList shipsLeft={opponentShipsList} />
      <UserGameBoard />
      <StyledMyList shipsLeft={myShipsList} />
      {isOpen && socket ? <Modal>{socket?.id === winner ? <WonStatus /> : <LoseStatus />}</Modal> : null}
    </Wrapper>
  );
};

export default Game;
