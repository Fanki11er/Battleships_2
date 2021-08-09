import { ShotResult } from '../../../Types/types';
import hit from '../../../assets/Images/hit-image.svg';
import miss from '../../../assets/Images/miss-image.svg';
import { UsedCell } from '../../Atoms/UsedCell/UsedCell';
import { Board, BoardProps, Image } from './OpponentShotBoard.styles';
import { v4 as uniqId } from 'uuid';

type Props = {
  shots: ShotResult[];
};

const OpponentShotsBoard = (props: Props & BoardProps) => {
  const { shots, boardSize } = props;

  const renderShots = (shots: ShotResult[]) => {
    return shots.map(({ coordinates, status }) => {
      return (
        <UsedCell coordinates={coordinates} key={uniqId()}>
          {status === 'hit' && <Image src={hit} />}
          {status === 'miss' && <Image src={miss} />}
        </UsedCell>
      );
    });
  };

  return (
    <Board boardSize={boardSize} shots={shots}>
      {shots.length && renderShots(shots)}
    </Board>
  );
};

export default OpponentShotsBoard;
