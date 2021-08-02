import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { ShotResult } from '../../../Types/types';
import { StyledBoard } from '../Board/Board.styles';
import hit from '../../../assets/Images/hit-image.svg';
import miss from '../../../assets/Images/miss-image.svg';
import { UsedCell } from '../../Atoms/UsedCell/UsedCell';

type Props = {
  shots: ShotResult[];
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

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const OpponentShotsBoard = (props: Props & BoardProps) => {
  const { shots, boardSize } = props;

  const renderShots = (shots: ShotResult[]) => {
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
