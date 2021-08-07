import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

type WrapperProps = {
  boardSize: number;
};

export const Wrapper = styled.div`
  width: ${(props: StyledProps & WrapperProps) => `${props.theme.otherDimensions.cellSizeNumber * props.boardSize}px`};
  height: ${(props: StyledProps & WrapperProps) => `${props.theme.otherDimensions.cellSizeNumber * props.boardSize}px`};
  position: relative;
  grid-column: 3/4;
  grid-row: 1/2;
  justify-self: center;
  align-self: center;
`;
