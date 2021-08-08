import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { LoseStatus, WonStatus } from '../../components/Atoms/EndGameStatus/EndGameStatus';
import TurnIndicator from '../../components/Atoms/TurnIndicator/TurnIndicator';
import Modal from '../../components/Organisms/Modal/Modal';
import TargetingBoard from '../../components/Organisms/TargetingBoard/TrgetingBoard';
import UserGameBoard from '../../components/Organisms/UserGameBoard/UserGameBoard';
import useModal from '../../Hooks/useModal';
import { GameContext } from '../../providers/gameProvider';
import { SocketContext } from '../../providers/socketProvider';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 40% 1fr 40%;
  grid-template-rows: 1fr;
`;

const Game = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { winner } = useContext(GameContext);
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    if (winner) {
      handleOpenModal();
    }

    return () => {
      handleCloseModal();
    };
  }, [winner]);
  return (
    <Wrapper>
      <UserGameBoard />
      <TargetingBoard />
      <TurnIndicator />
      {isOpen && socket ? <Modal>{socket?.id === winner ? <WonStatus /> : <LoseStatus />}</Modal> : null}
    </Wrapper>
  );
};

export default Game;
