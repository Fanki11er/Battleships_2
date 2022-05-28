import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { UsedCell } from '../../Atoms/UsedCell/UsedCell';
import { StyledBoard } from '../Board/Board.styles';

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ResultCell = styled(UsedCell)`
  user-select: none;
  cursor: not-allowed;
  background-color: ${(props: StyledProps) => props.theme.colors.water};
`;

export const TargetCell = styled.div`
  width: ${(props: StyledProps) => `${props.theme.otherDimensions.cellSizeNumber}px`};
  height: ${(props: StyledProps) => `${props.theme.otherDimensions.cellSizeNumber}px`};
  background-color: ${(props: StyledProps) => props.theme.colors.water};
  user-select: none;
  cursor: not-allowed;
  grid-auto-flow: dense;
  border: none;

  @media screen and (${(props: StyledProps) => props.theme.devices.large}) {
    width: ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`};
    height: ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`};
  }
`;

export const Board = styled(StyledBoard)`
  grid-auto-flow: dense;
  user-select: none;
  cursor: none;
  grid-gap: 2px;
  @media screen and (${(props: StyledProps) => props.theme.devices.large}) {
    grid-gap: 1px;
  }
`;
