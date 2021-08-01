import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { StyledBoard } from '../Board/Board.styles';
export const StyledUserBoard = styled(StyledBoard)`
  width: 500px;
  height: 500px;
  grid-gap: 0;
  grid-auto-flow: dense;
`;

export const EmptyCell = styled.div`
  width: ${(props: StyledProps) => `${props.theme.otherDimensions.cellSizeNumber}px`};
  height: ${(props: StyledProps) => `${props.theme.otherDimensions.cellSizeNumber}px`};
  background-color: ${(props: StyledProps) => props.theme.colors.water};
  border: none;
`;
