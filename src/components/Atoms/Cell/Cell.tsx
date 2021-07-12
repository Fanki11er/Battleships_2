import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import Ship from '../Ship/Ship';
import { ItemTypes, setCellColor } from '../../../Helpers/Helpers';
import { Coordinates } from '../../../Class/BattleShip';
import { Identifier } from '../../../Types/types';
import { useContext } from 'react';
import { ShipsContext } from '../../../providers/shipsProvider';

type StyleProps = {
  isOver: boolean;
  canDrop: boolean;
  isSomethingDragging: boolean;
};
const StyledCell = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid gray;
  //background-color: ${(props: StyleProps) => (props.isOver ? 'red' : 'orange')};
  background-color: ${(props: StyleProps) => (props.isSomethingDragging ? 'orange' : setCellColor(props.isOver, props.canDrop))};
`;

type Props = {
  coordinates: Coordinates;
  hasShip: boolean;
};

const Cell = (props: Props) => {
  const { coordinates: cords, hasShip } = props;
  const { moveShip, shipsToTake, canMoveShip } = useContext(ShipsContext);

  useEffect(() => {
    setCoordinates(cords);
  }, [cords]);
  const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });

  const [{ isOver, canDrop, isSomethingDragging }, drop] = useDrop(
    () => ({
      accept: ItemTypes.SHIP,
      canDrop: (item) => canMoveShip(item, coordinates, hasShip),
      drop: (item: Identifier) => {
        moveShip(coordinates, item);
      },

      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
        isSomethingDragging: !!!monitor.getItem(),
      }),
    }),
    [coordinates, shipsToTake]
  );

  const renderCell = () => {
    return (
      <StyledCell ref={drop} isOver={isOver} canDrop={canDrop} isSomethingDragging={isSomethingDragging}>
        {hasShip ? <Ship size={1} position={'horizontal'} /> : null}
      </StyledCell>
    );
  };

  return <>{renderCell()}</>;
};

export default Cell;
