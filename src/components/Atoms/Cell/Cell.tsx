import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import Ship from '../Ship/Ship';
import { setOnBoard, ItemTypes } from '../../../Helpers/Helpers';
import useShips from '../../../Hooks/useShips';
import { Coordinates } from '../../../Class/Ship';

type PR = {
  isOver: boolean;
};
const StyledCell = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid gray;
  background-color: ${(props: PR) => (props.isOver ? 'red' : 'orange')};
`;

type Props = {
  coordinates: Coordinates;
};

const Cell = (props: Props) => {
  const { coordinates: cords } = props;
  const { addShip, ships } = useShips();

  useEffect(() => {
    setCoordinates(cords);
    //setId(`${cords.x}${cords.y}`);
  }, [cords]);
  const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });
  const [id, setId] = useState('');

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.SHIP,
      drop: () => addShip(coordinates),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [coordinates]
  );

  const renderCell = (coordinates: Coordinates) => {
    const { x, y } = coordinates;
    const hasShip = ships.filter((ship) => {
      return ship.coordinates.filter(({ x: sX, y: sY }) => {
        return sX === x && sY === y;
      });
    });
    console.log(hasShip);
    return (
      <StyledCell ref={drop} isOver={isOver}>
        {hasShip.length ? <Ship /> : null}
      </StyledCell>
    );
  };
  return <>{renderCell(coordinates)}</>;
};

export default Cell;
