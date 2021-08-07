import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { Coordinates } from '../../../Class/BattleShip';
import TargetingCell from '../../Atoms/TargetingCell/TargetingCell';

type WrapperProps = {
  boardSize: number;
};

const Wrapper = styled.div`
  width: calc(${(props: StyledProps & WrapperProps) => props.theme.otherDimensions.cellSizeNumber * props.boardSize} + 40px);
  height: calc(${(props: StyledProps & WrapperProps) => props.theme.otherDimensions.cellSizeNumber * props.boardSize} + 40px);
  justify-self: center;
  align-self: center;
  position: absolute;
  left: 11px;
  top: 0;
  display: grid;
  grid-template-rows: repeat(10, ${(props: StyledProps) => props.theme.otherDimensions.cellSize});
  grid-template-columns: repeat(10, ${(props: StyledProps) => props.theme.otherDimensions.cellSize});
  grid-gap: 2px;
  cursor: none;
`;

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
