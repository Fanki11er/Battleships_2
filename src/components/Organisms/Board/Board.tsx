//import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Coordinates } from '../../../Class/Ship';
import { checkIfHasShip, makeCoordinates } from '../../../Helpers/Helpers';
import useShips from '../../../Hooks/useShips';
import Cell from '../../Atoms/Cell/Cell';
const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);

  width: 310px;
  height: 310px;
  border: 5px solid black;
  margin: 100px;
`;

const Board = (props: React.PropsWithChildren<React.ReactNode>) => {
  const [coordinates, setCoordinates] = useState<Coordinates[]>([]);
  const { ships } = useShips();
  useEffect(() => {
    setCoordinates(makeCoordinates(3));
  }, []);
  const renderCells = () => {
    return coordinates.map((coordinate) => {
      const hasShip = checkIfHasShip(coordinate, ships);
      console.log(hasShip);
      return <Cell coordinates={coordinate} />;
    });
  };
  return <StyledBoard>{renderCells()}</StyledBoard>;
};

export default Board;
