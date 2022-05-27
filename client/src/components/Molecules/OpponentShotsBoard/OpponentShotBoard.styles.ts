import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { ShotResult } from '../../../Types/types';
import { StyledBoard } from '../Board/Board.styles';

export type BoardProps = {
  boardSize: number;
  shots: ShotResult[];
};

export const Board = styled(StyledBoard)`
  width: ${(props: StyledProps & BoardProps) => `${props.theme.otherDimensions.cellSizeNumber * props.boardSize}px`};
  height: ${(props: StyledProps & BoardProps) => `${props.theme.otherDimensions.cellSizeNumber * props.boardSize}px`};
  grid-gap: 0;
  position: absolute;
  left: 0;
  top: 0;
  color: transparent;
  font-size: 0;

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    width: ${(props: StyledProps & BoardProps) => `${props.theme.otherDimensions.smallCellSize * props.boardSize}px`};
    height: ${(props: StyledProps & BoardProps) => `${props.theme.otherDimensions.smallCellSize * props.boardSize}px`};
    grid-gap: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  animation-name: appear;
  animation-duration: 4s;
  animation-fill-mode: forwards;
  border-radius: 10%;
  background-color: transparent;

  @keyframes appear {
    30% {
      background-color: ${(props: StyledProps) => props.theme.colors.transparentOrange};
    }
    100% {
      background-color: transparent;
    }
  }
`;
