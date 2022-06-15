import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

type WrapperProps = {
  boardSize: number;
};

export const Wrapper = styled.div`
  width: calc(${(props: StyledProps & WrapperProps) => props.theme.otherDimensions.cellSizeNumber * props.boardSize});
  height: calc(${(props: StyledProps & WrapperProps) => props.theme.otherDimensions.cellSizeNumber * props.boardSize});
  justify-self: center;
  align-self: center;
  position: absolute;
  left: -9px;
  top: -0px;
  display: grid;
  grid-template-rows: repeat(10, ${(props: StyledProps) => props.theme.otherDimensions.cellSize});
  grid-template-columns: repeat(10, ${(props: StyledProps) => props.theme.otherDimensions.cellSize});
  grid-gap: 2px;
  cursor: not-allowed;
  border: none;

  @media screen and (${(props: StyledProps) => props.theme.devices.large}) {
    width: ${(props: StyledProps & WrapperProps) => `${props.theme.otherDimensions.smallCellSize * props.boardSize}px`};
    height: ${(props: StyledProps & WrapperProps) => `${props.theme.otherDimensions.smallCellSize * props.boardSize}px`};
    grid-template-rows: repeat(10, ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`});
    grid-template-columns: repeat(10, ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`});
    grid-gap: 1px;
    left: -4.5px;
    top: 0px;
    border: none;
  }
`;
