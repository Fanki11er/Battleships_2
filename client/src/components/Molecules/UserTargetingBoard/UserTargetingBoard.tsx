import { Coordinates } from '../../../Class/BattleShip';
import TargetingCell from '../../Atoms/TargetingCell/TargetingCell';
import { Wrapper } from './UserTargetingBoard.styles';

type Props = {
  boardSize: number;
  coordinates: Coordinates[];
  handleShot: (coordinates: Coordinates) => void;
  isMyTurn: boolean;
};
const UserTargetingBoard = (props: Props) => {
  const { boardSize, coordinates, handleShot, isMyTurn } = props;

  const renderCells = (coordinates: Coordinates[]) => {
    return coordinates.map((coordinate) => {
      return <TargetingCell coordinates={coordinate} handleShot={handleShot} isMyTurn={isMyTurn} key={`${coordinate.x}${coordinate.y}`} />;
    });
  };
  return <Wrapper boardSize={boardSize}>{renderCells(coordinates)}</Wrapper>;
};

export default UserTargetingBoard;
