import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { BattleShip } from '../../../Class/BattleShip';
import UserBoardCell from '../../Atoms/UserBoardCell/UserBoardCell';
import { StyledBoard } from '../Board/Board.styles';

const StyledUserBoard = styled(StyledBoard)`
  width: 500px;
  height: 500px;
  grid-gap: 0;
  grid-auto-flow: dense;
`;

const EmptyCell = styled.div`
  width: ${(props: StyledProps) => `${props.theme.otherDimensions.cellSizeNumber}px`};
  height: ${(props: StyledProps) => `${props.theme.otherDimensions.cellSizeNumber}px`};
  background-color: ${(props: StyledProps) => props.theme.colors.water};
  border: none;
`;
type Props = {
  ships: BattleShip[];
  boardSize: number;
};
const UserBoard = (props: Props) => {
  const { ships, boardSize } = props;

  const renderCellsWithShips = (ships: BattleShip[]) => {
    return ships.map((ship, index) => {
      return <UserBoardCell ship={ship} key={index} />;
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

    return cellsArray.map(() => <EmptyCell />);
  };
  return (
    <StyledUserBoard>
      {ships && renderCellsWithShips(ships)}
      {ships && renderEmptyCells(boardSize, ships)}
    </StyledUserBoard>
  );
};

export default UserBoard;
