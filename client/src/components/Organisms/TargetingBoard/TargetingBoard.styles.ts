import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

type WrapperProps = {
  boardSize: number;
};

export const Wrapper = styled.div`
  width: ${(props: StyledProps & WrapperProps) => `${props.theme.otherDimensions.cellSizeNumber * props.boardSize}px`};
  height: ${(props: StyledProps & WrapperProps) => `${props.theme.otherDimensions.cellSizeNumber * props.boardSize}px`};
  position: relative;
  grid-column: 5/6;
  grid-row: 1/2;
  justify-self: flex-start;
  align-self: center;
  margin: 0 20px;

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    width: ${(props: StyledProps & WrapperProps) => `${props.theme.otherDimensions.smallCellSize * props.boardSize}px`};
    height: ${(props: StyledProps & WrapperProps) => `${props.theme.otherDimensions.smallCellSize * props.boardSize}px`};
    grid-column: 1/2;
    grid-row: 2/3;
    justify-self: center;
  }
`;
