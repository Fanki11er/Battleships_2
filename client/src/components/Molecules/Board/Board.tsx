import { useContext } from 'react';
import { checkIfHasShip } from '../../../Helpers/Helpers';
import { ShipsContext } from '../../../providers/shipsProvider';
import Cell from '../../Atoms/Cell/Cell';
import { StyledBoard } from './Board.styles';

const Board = () => {
  const { ships, coordinates } = useContext(ShipsContext);

  const renderCells = () => {
    return coordinates.map((coordinate) => {
      const hasShip = checkIfHasShip(coordinate, ships);
      const key = `${coordinate.x}${coordinate.y}`;
      return <Cell key={key} coordinates={coordinate} hasShip={hasShip} />;
    });
  };
  return <StyledBoard>{renderCells()}</StyledBoard>;
};

export default Board;
