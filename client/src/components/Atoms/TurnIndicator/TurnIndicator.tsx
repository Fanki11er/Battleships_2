import { useContext } from 'react';
import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { GameContext } from '../../../providers/gameProvider';

type TurnProps = {
  isMyTurn: boolean;
};

const Wrapper = styled.div`
  width: 300px;
  height: 80px;
  border: 3px solid ${(props: StyledProps) => props.theme.colors.green};
  border-radius: 15px;
  grid-row: 1/2;
  grid-column: 2/3;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TurnInfo = styled.span`
  font-size: ${(props: StyledProps) => props.theme.fontSizes.L};
  color: ${(props: StyledProps & TurnProps) => (props.isMyTurn ? props.theme.colors.okGreen : props.theme.colors.orange)};
  font-weight: bold;
`;

const TurnIndicator = () => {
  const { isMyTurn } = useContext(GameContext);
  return (
    <Wrapper>
      <TurnInfo isMyTurn={isMyTurn}>{isMyTurn ? 'Your turn' : 'Opponent turn'}</TurnInfo>
    </Wrapper>
  );
};

export default TurnIndicator;
