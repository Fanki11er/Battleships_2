import { useContext } from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Coordinates } from '../../../Class/BattleShip';
import { checkIfHasShip, makeCoordinates } from '../../../Helpers/Helpers';
import { ShipsContext } from '../../../providers/shipsProvider';
import Cell from '../../Atoms/Cell/Cell';

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: repeat(5, 100px);

  width: 510px;
  height: 510px;
  border: 5px solid black;
  margin: 100px;
`;

const Board = () => {
  const [coordinates, setCoordinates] = useState<Coordinates[]>([]);
  const { boardSize } = useContext(ShipsContext);
  const { ships } = useContext(ShipsContext);

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
