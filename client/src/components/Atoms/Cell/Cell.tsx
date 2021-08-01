import { useEffect } from 'react';
import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../../Helpers/Helpers';
import { Coordinates } from '../../../Class/BattleShip';
import { Identifier } from '../../../Types/types';
import { useContext } from 'react';
import { ShipsContext } from '../../../providers/shipsProvider';
import { ShipMarker, StyledCell } from './Cell.styles';

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
        {hasShip ? <ShipMarker /> : null}
      </StyledCell>
    );
  };

  return <>{renderCell()}</>;
};

export default Cell;
