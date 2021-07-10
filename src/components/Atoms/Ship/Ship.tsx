import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import { useState } from 'react';
import { ItemTypes } from '../../../Helpers/Helpers';

const StyledShip = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
`;

const Ship = () => {
  const [position, setPosition] = useState('');
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.SHIP,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const getPosition = () => position;

  return <StyledShip ref={drag}></StyledShip>;
};

export default Ship;
