import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { Props } from './Ship';

export const StyledShip = styled.div`
  width: ${(props: Props & StyledProps) => (props.size ? '115px' : props.theme.otherDimensions.cellSize)};
  height: ${(props: Props & StyledProps) => (props.size ? '115px' : props.theme.otherDimensions.cellSize)};

  opacity: ${(props: Props) => (props.isDragging ? '0.5' : '1')};
  cursor: grab;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props: Props) => (props.position === 'horizontal' ? 'rotate(0deg) rotateY(0deg)' : 'rotate(90deg) rotateY(180deg)')};
  background-color: ${(props: Props & StyledProps) => (props.size ? 'transparent' : props.theme.colors.shipRectangle)};
  transition: transform 0.3s;
`;

export const Wrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: transparent;
  border: 3px solid transparent;
  border-radius: ${(props: Props) => (props.size ? '10px' : '0')};
  &:hover {
    border: 3px solid ${(props: Props & StyledProps) => (props.size ? props.theme.colors.orange : 'transparent')};
  }
  transition: border 0.5s;
`;
