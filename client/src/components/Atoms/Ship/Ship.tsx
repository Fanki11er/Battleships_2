import { DragPreviewImage, useDrag } from 'react-dnd';
import { ItemTypes } from '../../../Helpers/Helpers';
import { Position } from '../../../Class/BattleShip';
import { LargeShip, MediumShip, SmallShip, VeryLargeShip } from '../ShipsImages/ShipsImages';
import test from '../../../assets/Images/anchor-image.svg';
import { StyledShip, Wrapper } from './Ship.styles';

export type Props = {
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
      }),
    }),
    [identifier, position]
  );

  return (
    <Wrapper size={size} position={position}>
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
    </Wrapper>
  );
};

export default Ship;
