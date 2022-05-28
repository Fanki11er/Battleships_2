import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { Coordinates } from '../../../Class/BattleShip';

type CellProps = {
  coordinates: Coordinates;
};

export const UsedCell = styled.div`
  width: ${(props: StyledProps) => `${props.theme.otherDimensions.cellSizeNumber}px`};
  height: ${(props: StyledProps) => `${props.theme.otherDimensions.cellSizeNumber}px`};
  border: none;
  grid-row: ${(props: CellProps & StyledProps) => `${props.coordinates.x}/${props.coordinates.x + 1}`};
  grid-column: ${(props: CellProps & StyledProps) => `${props.coordinates.y}/${props.coordinates.y + 1}`};
  user-select: none;

  @media screen and (${(props: StyledProps) => props.theme.devices.large}) {
    width: ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`};
    height: ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`};
  }
`;
