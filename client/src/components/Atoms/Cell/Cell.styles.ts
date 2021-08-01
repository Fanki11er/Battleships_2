import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { setCellColor } from '../../../Helpers/Helpers';

type AppearanceProps = {
  isOver: boolean;
  canDrop: boolean;
  isSomethingDragging: boolean;
};
export const StyledCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: ${(props: StyledProps) => props.theme.otherDimensions.cellSize};
  height: ${(props: StyledProps) => props.theme.otherDimensions.cellSize};
  border: 2px solid
    ${(props: StyledProps & AppearanceProps) =>
      props.isSomethingDragging ? props.theme.colors.green : setCellColor(props.canDrop, props.theme.colors.green, props.theme.colors.red)};
  background-color: ${(props: AppearanceProps & StyledProps) =>
    props.isSomethingDragging ? props.theme.colors.darkBlue : setCellColor(props.canDrop, props.theme.colors.green, props.theme.colors.red)};
  cursor: ${(props: AppearanceProps) => (props.canDrop ? 'none' : 'default')};
`;

export const ShipMarker = styled.div`
  width: ${(props: StyledProps) => props.theme.otherDimensions.cellSize};
  height: ${(props: StyledProps) => props.theme.otherDimensions.cellSize};
  background-color: ${(props: StyledProps) => props.theme.colors.shipRectangle};
  border: 2px solid ${(props: StyledProps) => props.theme.colors.shipRectangle};
  position: absolute;
  left: -2;
  top: -2;
`;
