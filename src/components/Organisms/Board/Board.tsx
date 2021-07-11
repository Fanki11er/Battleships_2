import { useContext } from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Coordinates, BattleShip } from '../../../Class/BattleShip';
import { checkIfHasShip, makeCoordinates } from '../../../Helpers/Helpers';
import useShips from '../../../Hooks/useShips';
import { ShipsContext } from '../../../providers/shipsProvider';
import { Identifier } from '../../../Types/types';
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

const Board = () => {
  const [coordinates, setCoordinates] = useState<Coordinates[]>([]);
  const [ships, setShips] = useState<BattleShip[]>([]);
  console.log(ships);

  const addShip = (coordinates: Coordinates, item: Identifier) => {
    ships.push(new BattleShip(2, coordinates));
    setShips([...ships]);
  };

  useEffect(() => {
    setCoordinates(makeCoordinates(3));
  }, []);

  const renderCells = () => {
    return coordinates.map((coordinate) => {
      const hasShip = checkIfHasShip(coordinate, ships);
      const key = `${coordinate.x}${coordinate.y}`;
      return <Cell key={key} coordinates={coordinate} addShip={addShip} hasShip={hasShip} />;
    });
  };
  return <StyledBoard>{renderCells()}</StyledBoard>;
};

export default Board;
/*
props: React.PropsWithChildren<React.ReactNode> */
