import styled from 'styled-components';
import { useDrag } from 'react-dnd';
//import { useState } from 'react';
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
};
const Ship = (props: Props) => {
  const { size, position } = props;
  //const [position, setPosition] = useState('');
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.SHIP,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  //const getPosition = () => position;

  return <StyledShip size={size} position={position} ref={drag}></StyledShip>;
};

export default Ship;
