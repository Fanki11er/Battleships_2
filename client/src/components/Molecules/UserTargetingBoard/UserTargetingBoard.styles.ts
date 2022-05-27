import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

type WrapperProps = {
  boardSize: number;
};

export const Wrapper = styled.div`
  width: calc(${(props: StyledProps & WrapperProps) => props.theme.otherDimensions.cellSizeNumber * props.boardSize} + 40px);
  height: calc(${(props: StyledProps & WrapperProps) => props.theme.otherDimensions.cellSizeNumber * props.boardSize} + 40px);
  justify-self: center;
  align-self: center;
  position: absolute;
  left: 11px;
  top: 0;
  display: grid;
  grid-template-rows: repeat(10, ${(props: StyledProps) => props.theme.otherDimensions.cellSize});
  grid-template-columns: repeat(10, ${(props: StyledProps) => props.theme.otherDimensions.cellSize});
  grid-template-rows: repeat(10, ${(props: StyledProps) => props.theme.otherDimensions.smallCellSize}) !important;
  grid-template-columns: repeat(10, ${(props: StyledProps) => props.theme.otherDimensions.smallCellSize}) !important;
  grid-gap: 2px;
  cursor: none;

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    width: ${(props: StyledProps & WrapperProps) => `${props.theme.otherDimensions.smallCellSize * props.boardSize}px`};
    height: ${(props: StyledProps & WrapperProps) => `${props.theme.otherDimensions.smallCellSize * props.boardSize}px`};
    grid-template-rows: repeat(10, ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`});
    grid-template-columns: repeat(10, ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`});
    grid-gap: 0;
    left: 3px;
  }
`;
