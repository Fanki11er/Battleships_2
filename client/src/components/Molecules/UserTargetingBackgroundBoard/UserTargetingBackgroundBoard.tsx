import styled from 'styled-components';
import { Shot, ShotResult } from '../../../Types/types';
import { UsedCell } from '../../Atoms/UsedCell/UsedCell';
import { StyledBoard } from '../Board/Board.styles';
import hit from '../../../assets/Images/hit-image.svg';
import miss from '../../../assets/Images/miss-image.svg';
import radar from '../../../assets/Images/radar-image.svg';
import { StyledProps } from '../../../assets/styles/theme';

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const ResultCell = styled(UsedCell)`
  user-select: none;
  cursor: not-allowed;
  background-color: ${(props: StyledProps) => props.theme.colors.water};
`;

const TargetCell = styled.div`
  width: ${(props: StyledProps) => `${props.theme.otherDimensions.cellSizeNumber}px`};
  height: ${(props: StyledProps) => `${props.theme.otherDimensions.cellSizeNumber}px`};
  background-color: ${(props: StyledProps) => props.theme.colors.water};
  user-select: none;
  cursor: not-allowed;
`;

const Board = styled(StyledBoard)``;
type Props = {
  shots: ShotResult[];
  boardSize: number;
};
const UserTargetingBackgroundBoard = (props: Props) => {
  const { shots, boardSize } = props;

  const renderShots = (shots: ShotResult[]) => {
    return shots.map(({ coordinates, status }) => {
      return (
        <ResultCell coordinates={coordinates}>
          {status === 'hit' && <Image src={hit} alt={'hit image'} />}
          {status === 'miss' && <Image src={miss} alt={'miss image'} />}
        </ResultCell>
      );
    });
  };

  const renderSelectedCells = (boardSize: number, shots: Shot[]) => {
    const numberOfCells = boardSize * boardSize - shots.length;
    const cellsArray: unknown[] = [];
    for (let i = 0; i < numberOfCells; i++) {
      cellsArray.push(TargetCell);
    }

    return cellsArray.map((_, index) => (
      <TargetCell key={index}>
        <Image src={radar} alt={'radar image'} />
      </TargetCell>
    ));
  };
  return (
    <Board>
      {renderShots(shots)}
      {renderSelectedCells(boardSize, shots)}
    </Board>
  );
};

export default UserTargetingBackgroundBoard;
