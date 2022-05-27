import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { StyledBoard } from '../Board/Board.styles';

type WrapperProps = {
  boardSize: number;
};

export const StyledUserBoard = styled(StyledBoard)`
  width: 500px;
  height: 500px;
  grid-gap: 0;
  grid-auto-flow: dense;
  user-select: none;

  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    width: ${(props: StyledProps & WrapperProps) => `${props.theme.otherDimensions.smallCellSize * props.boardSize}px`};
    height: ${(props: StyledProps & WrapperProps) => `${props.theme.otherDimensions.smallCellSize * props.boardSize}px`};
    grid-gap: 0;
  }
`;

export const EmptyCell = styled.div`
  width: ${(props: StyledProps) => `${props.theme.otherDimensions.cellSizeNumber}px`};
  height: ${(props: StyledProps) => `${props.theme.otherDimensions.cellSizeNumber}px`};
  background-color: ${(props: StyledProps) => props.theme.colors.water};
  border: none;

  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    width: ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`};
    height: ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`};
  }
`;
