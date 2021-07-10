import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import Ship from '../Ship/Ship';
import { ItemTypes } from '../../../Helpers/Helpers';
import { Coordinates } from '../../../Class/BattleShip';

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
  hasShip: boolean;
  addShip: (coordinates: Coordinates) => void;
};

const Cell = (props: Props) => {
  const { coordinates: cords, addShip, hasShip } = props;

  useEffect(() => {
    setCoordinates(cords);
  }, [cords]);
  const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });

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
  const renderCell = () => {
    return (
      <StyledCell ref={drop} isOver={isOver}>
        {hasShip ? <Ship size={1} position={'horizontal'} /> : null}
      </StyledCell>
    );
  };

  return <>{renderCell()}</>;
};

export default Cell;

/*
const renderCell = (coordinates: Coordinates) => {
    const { x, y } = coordinates;
    const hasShip = ships.filter((ship) => {
      return ship.coordinates.filter(({ x: sX, y: sY }) => {
        return sX === x && sY === y;
      });
    });
    return (
      <StyledCell ref={drop} isOver={isOver}>
        {hasShip.length ? <Ship /> : null}
      </StyledCell>
    );
  }; */
