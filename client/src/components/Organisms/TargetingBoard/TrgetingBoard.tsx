import { useContext } from 'react';
import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { GameContext } from '../../../providers/gameProvider';
import { ShipsContext } from '../../../providers/shipsProvider';
import UserTargetingBackgroundBoard from '../../Molecules/UserTargetingBackgroundBoard/UserTargetingBackgroundBoard';
import UserTargetingBoard from '../../Molecules/UserTargetingBoard/UserTargetingBoard';

type WrapperProps = {
  boardSize: number;
};

const Wrapper = styled.div`
  width: ${(props: StyledProps & WrapperProps) => `${props.theme.otherDimensions.cellSizeNumber * props.boardSize}px`};
  height: ${(props: StyledProps & WrapperProps) => `${props.theme.otherDimensions.cellSizeNumber * props.boardSize}px`};
  position: relative;
  grid-column: 3/4;
  grid-row: 1/2;
  justify-self: center;
  align-self: center;
`;

const TargetingBoard = () => {
  const { shots, handleShot } = useContext(GameContext);
  const { boardSize, coordinates } = useContext(ShipsContext);

  return (
    <Wrapper boardSize={boardSize}>
      <UserTargetingBackgroundBoard shots={shots} boardSize={boardSize} />
      <UserTargetingBoard boardSize={boardSize} coordinates={coordinates} handleShot={handleShot} />
    </Wrapper>
  );
};

export default TargetingBoard;
