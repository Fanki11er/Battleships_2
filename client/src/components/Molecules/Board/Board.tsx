import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Coordinates } from '../../../Class/BattleShip';
import { checkIfHasShip, makeCoordinates } from '../../../Helpers/Helpers';
import { ShipsContext } from '../../../providers/shipsProvider';
import Cell from '../../Atoms/Cell/Cell';
import { StyledBoard } from './Board.styles';

const Board = () => {
  const [coordinates, setCoordinates] = useState<Coordinates[]>([]);
  const { boardSize, ships } = useContext(ShipsContext);

  useEffect(() => {
    setCoordinates(makeCoordinates(boardSize));
  }, [boardSize]);

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
