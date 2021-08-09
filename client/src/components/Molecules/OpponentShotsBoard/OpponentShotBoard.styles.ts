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
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
