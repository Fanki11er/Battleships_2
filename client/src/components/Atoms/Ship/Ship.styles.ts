import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { Props } from './Ship';

export const StyledShip = styled.div`
  width: ${(props: Props & StyledProps) => (props.size ? '115px' : props.theme.otherDimensions.cellSize)};
  height: ${(props: Props & StyledProps) => (props.size ? '115px' : props.theme.otherDimensions.cellSize)};
  &:hover {
    border: 3px solid ${(props: Props & StyledProps) => (props.size ? props.theme.colors.orange : 'none')};
    border-radius: ${(props: Props) => (props.size ? '5px' : '0')};
  }
  opacity: ${(props: Props) => (props.isDragging ? '0.5' : '1')};
  cursor: grab;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props: Props) => (props.position === 'horizontal' ? 'rotate(0deg) rotateY(0deg)' : 'rotate(90deg) rotateY(180deg)')};
  background-color: ${(props: Props & StyledProps) => (props.size ? 'transparent' : props.theme.colors.shipRectangle)};
`;
