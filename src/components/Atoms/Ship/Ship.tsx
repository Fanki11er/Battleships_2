import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../../Helpers/Helpers';
import { Position } from '../../../Class/BattleShip';

const StyledShip = styled.div`
  width: ${(props: Props) => (props.position === 'horizontal' ? `${100 * props.size}px` : '100px')};
  height: ${(props: Props) => (props.position === 'vertical' ? `${100 * props.size}px` : '100px')};
  background-color: blue;
`;
type Props = {
  size: number;
  position: Position;
  identifier?: number;
  isDraggable?: boolean;
};
const Ship = (props: Props) => {
  const { size, position, identifier, isDraggable } = props;
  const [, drag] = useDrag(
    () => ({
      type: ItemTypes.SHIP,
      item: { identifier, position, size },

      /*collect: (monitor) => ({
      //isDragging: !!monitor.isDragging(),
    }),*/
    }),
    [identifier]
  );

  return <StyledShip size={size} position={position} ref={isDraggable ? drag : null}></StyledShip>;
};

export default Ship;
