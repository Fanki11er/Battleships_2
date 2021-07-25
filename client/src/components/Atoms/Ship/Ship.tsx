import styled from 'styled-components';
import { DragPreviewImage, useDrag } from 'react-dnd';
import { ItemTypes } from '../../../Helpers/Helpers';
import { Position } from '../../../Class/BattleShip';
import { LargeShip, MediumShip, SmallShip, VeryLargeShip } from '../ShipsImages/ShipsImages';
import { StyledProps } from '../../../assets/styles/theme';
import test from '../../../assets/Images/anchor-image.svg';

const StyledShip = styled.div`
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
type Props = {
  size: number;
  position: Position;
  handleShipRotate?: (identifier: number | undefined) => void;
  identifier?: number;
  isDraggable?: boolean;
  isDragging?: boolean;
};
const Ship = (props: Props) => {
  const { size, position, identifier, isDraggable, handleShipRotate } = props;

  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.SHIP,
      item: { identifier, position, size },

      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
        connectDragSource: '',
      }),
    }),
    [identifier, position]
  );

  return (
    <>
      <DragPreviewImage connect={preview} src={test} />
      <StyledShip
        size={size}
        position={position}
        isDragging={isDragging}
        ref={isDraggable ? drag : null}
        onClick={() => handleShipRotate && handleShipRotate(identifier)}
      >
        {size === 2 && <SmallShip />}
        {size === 3 && <MediumShip />}
        {size === 4 && <LargeShip />}
        {size === 5 && <VeryLargeShip />}
      </StyledShip>
    </>
  );
};

export default Ship;
