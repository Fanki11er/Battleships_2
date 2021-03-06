import { BattleShip } from '../../../Class/BattleShip';
import UserBoardCell from '../../Atoms/UserBoardCell/UserBoardCell';
import { EmptyCell, StyledUserBoard } from './UserBoard.styles';

type Props = {
  ships: BattleShip[];
  boardSize: number;
};
const UserBoard = (props: Props) => {
  const { ships, boardSize } = props;

  const renderCellsWithShips = (ships: BattleShip[]) => {
    return ships.map((ship, index) => {
      return <UserBoardCell ship={ship} key={`${ship.coordinates[0].x}${ship.coordinates[0].y}`} />;
    });
  };

  const renderEmptyCells = (boardSize: number, ships: BattleShip[]) => {
    const occupied = ships.reduce((acc, ship) => {
      return (acc += ship.size);
    }, 0);
    const numberOfCells = boardSize * boardSize - occupied;
    const cellsArray: unknown[] = [];
    for (let i = 0; i < numberOfCells; i++) {
      cellsArray.push(EmptyCell);
    }

    return cellsArray.map((_, index) => <EmptyCell key={index} />);
  };
  return (
    <StyledUserBoard boardSize={boardSize}>
      {ships && renderCellsWithShips(ships)}
      {ships && renderEmptyCells(boardSize, ships)}
    </StyledUserBoard>
  );
};

export default UserBoard;
