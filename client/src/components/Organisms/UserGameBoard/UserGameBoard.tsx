import { useContext } from 'react';
import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { GameContext } from '../../../providers/gameProvider';
import { ShipsContext } from '../../../providers/shipsProvider';
import OpponentShotsBoard from '../../Molecules/OpponentShotsBoard/OpponentShotsBoard';
import UserBoard from '../../Molecules/UserBoard/UserBoard';

type WrapperProps = {
  boardSize: number;
};

const Wrapper = styled.div`
  width: ${(props: StyledProps & WrapperProps) => `${props.theme.otherDimensions.cellSizeNumber * props.boardSize}px`};
  height: ${(props: StyledProps & WrapperProps) => `${props.theme.otherDimensions.cellSizeNumber * props.boardSize}px`};
  position: relative;
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: flex-end;
  align-self: center;
  margin: 0 20px;
`;

const UserGameBoard = () => {
  const { ships } = useContext(ShipsContext);
  const { opponentShots } = useContext(GameContext);
  const { boardSize } = useContext(ShipsContext);

  return (
    <Wrapper boardSize={boardSize}>
      <UserBoard ships={ships} boardSize={boardSize} />
      <OpponentShotsBoard shots={opponentShots} boardSize={boardSize} />
    </Wrapper>
  );
};

export default UserGameBoard;
