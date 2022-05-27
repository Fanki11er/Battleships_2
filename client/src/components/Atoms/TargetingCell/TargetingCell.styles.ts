import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

type CellProps = {
  isVisible: boolean;
  isMyTurn: boolean;
};

export const Cell = styled.div`
  width: ${(props: StyledProps) => `${props.theme.otherDimensions.cellSizeNumber}px`};
  height: ${(props: StyledProps) => `${props.theme.otherDimensions.cellSizeNumber}px`};
  background-color: ${(props: StyledProps) => props.theme.colors.darkGray};
  visibility: ${(props: StyledProps & CellProps) => (props.isVisible ? 'visible' : 'hidden')};
  user-select: ${(props: StyledProps & CellProps) => (props.isVisible ? 'inherit' : 'none')};
  transition: all 0.3s;
  &:hover {
    background-color: ${(props: StyledProps & CellProps) => (props.isMyTurn ? props.theme.colors.orange : props.theme.colors.darkGray)};
    cursor: ${(props: StyledProps & CellProps) => (props.isMyTurn ? 'crosshair' : 'not-allowed')};
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    width: ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`};
    height: ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`};
  }
`;
