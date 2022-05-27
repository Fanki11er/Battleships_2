import { useContext } from 'react';
import { GameContext } from '../../../providers/gameProvider';
import { ShipsContext } from '../../../providers/shipsProvider';
import UserTargetingBackgroundBoard from '../../Molecules/UserTargetingBackgroundBoard/UserTargetingBackgroundBoard';
import UserTargetingBoard from '../../Molecules/UserTargetingBoard/UserTargetingBoard';
import { Wrapper } from './TargetingBoard.styles';

const TargetingBoard = () => {
  const { myShots, handleShot, isMyTurn } = useContext(GameContext);
  const { boardSize, coordinates } = useContext(ShipsContext);

  return (
    <Wrapper boardSize={boardSize}>
      <UserTargetingBackgroundBoard shots={myShots} boardSize={boardSize} />
      <UserTargetingBoard boardSize={boardSize} coordinates={coordinates} handleShot={handleShot} isMyTurn={isMyTurn} />
    </Wrapper>
  );
};

export default TargetingBoard;
