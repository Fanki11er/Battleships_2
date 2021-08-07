import { useContext } from 'react';
import { GameContext } from '../../../providers/gameProvider';
import { TurnInfo, Wrapper } from './TurnIndicator.styles';

const TurnIndicator = () => {
  const { isMyTurn } = useContext(GameContext);
  return (
    <Wrapper>
      <TurnInfo isMyTurn={isMyTurn}>{isMyTurn ? 'Your turn' : 'Opponent turn'}</TurnInfo>
    </Wrapper>
  );
};

export default TurnIndicator;
