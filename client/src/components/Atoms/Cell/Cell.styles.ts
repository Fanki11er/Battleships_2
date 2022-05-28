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
      props.isSomethingDragging
        ? props.theme.colors.green
        : setCellColor(props.canDrop, props.isOver, props.theme.colors.green, props.theme.colors.red, props.theme.colors.orange)};
  background-color: ${(props: AppearanceProps & StyledProps) =>
    props.isSomethingDragging
      ? props.theme.colors.darkBlue
      : setCellColor(props.canDrop, props.isOver, props.theme.colors.green, props.theme.colors.red, props.theme.colors.orange)};
  cursor: ${(props: AppearanceProps) => (props.canDrop ? 'none' : 'default')};

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: auto;
    top: auto;
    background: linear-gradient(-45deg, rgba(1, 1, 1, 0.07), rgba(1, 1, 1, 0.2));
  }

  @media screen and (min-width: 3000px) {
    width: ${(props: StyledProps) => `${props.theme.otherDimensions.largeCellSize}px`};
    height: ${(props: StyledProps) => `${props.theme.otherDimensions.largeCellSize}px`};
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.large}) {
    width: ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`};
    height: ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`};
  }
`;
export const ShipMarker = styled.div`
  width: ${(props: StyledProps) => props.theme.otherDimensions.cellSize};
  height: ${(props: StyledProps) => props.theme.otherDimensions.cellSize};
  background-color: ${(props: StyledProps) => props.theme.colors.shipRectangle};
  border: 2px solid ${(props: StyledProps) => props.theme.colors.shipRectangle};
  position: absolute;
  left: -2;
  top: -2;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: auto;
    top: auto;
    background: linear-gradient(-45deg, rgba(1, 1, 1, 0.07), rgba(1, 1, 1, 0.2));
  }

  @media screen and (min-width: 3000px) {
    width: ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`};
    height: ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`};
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.large}) {
    width: ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`};
    height: ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`};
  }
`;
