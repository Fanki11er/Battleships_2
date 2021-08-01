import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { Coordinates } from '../../../Class/BattleShip';
import { Shot } from '../../../Types/types';
import { StyledBoard } from '../Board/Board.styles';
import hit from '../../../assets/Images/hit-image.svg';
import miss from '../../../assets/Images/miss-image.svg';

type Props = {
  shots: Shot[];
};

type CellProps = {
  coordinates: Coordinates;
};
type BoardProps = {
  boardSize: number;
};

const Board = styled(StyledBoard)`
  width: ${(props: StyledProps & BoardProps) => `${props.theme.otherDimensions.cellSizeNumber * props.boardSize}px`};
  height: ${(props: StyledProps & BoardProps) => `${props.theme.otherDimensions.cellSizeNumber * props.boardSize}px`};
  grid-gap: 0;
  position: absolute;
  left: 0;
  top: 0;
`;

const UsedCell = styled.div`
  width: ${(props: StyledProps) => `${props.theme.otherDimensions.cellSizeNumber}px`};
  height: ${(props: StyledProps) => `${props.theme.otherDimensions.cellSizeNumber}px`};
  border: none;
  grid-row: ${(props: CellProps & StyledProps) => `${props.coordinates.x}/1`};
  grid-column: ${(props: CellProps & StyledProps) => `${props.coordinates.y}/1`};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const OpponentShotsBoard = (props: Props & BoardProps) => {
  const { shots, boardSize } = props;

  const renderShots = (shots: Shot[]) => {
    return shots.map(({ coordinates, status }) => {
      return (
        <UsedCell coordinates={coordinates}>
          {status === 'hit' && <Image src={hit} />}
          {status === 'miss' && <Image src={miss} />}
        </UsedCell>
      );
    });
  };

  return <Board boardSize={boardSize}>{renderShots(shots)}</Board>;
};

export default OpponentShotsBoard;
