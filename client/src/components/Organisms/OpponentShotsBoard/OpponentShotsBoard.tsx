import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { Coordinates } from '../../../Class/BattleShip';
import { Shot } from '../../../Types/types';
import { StyledBoard } from '../Board/Board.styles';
import hit from '../../../assets/Images/hit-image.svg';
import miss from '../../../assets/Images/miss-image.svg';

const Board = styled(StyledBoard)`
  width: ${(props: StyledProps) => `${props.theme.otherDimensions.cellSizeNumber * 10}px`};
  height: ${(props: StyledProps) => `${props.theme.otherDimensions.cellSizeNumber * 10}px`};
  grid-gap: 0;
`;
type Props = {
  shots: Shot[];
};

type CellProps = {
  coordinates: Coordinates;
};

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
const OpponentShotsBoard = (props: Props) => {
  const { shots } = props;

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

  return <Board>{renderShots(shots)}</Board>;
};

export default OpponentShotsBoard;
