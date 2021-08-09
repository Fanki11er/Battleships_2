import { ShotResult } from '../../../Types/types';
import hit from '../../../assets/Images/hit-image.svg';
import miss from '../../../assets/Images/miss-image.svg';
import radar from '../../../assets/Images/radar-image.svg';
import { Board, Image, ResultCell, TargetCell } from './UserTargetingBackgroundBoard.styles';
import { useCallback } from 'react';
import { v4 as uniqId } from 'uuid';

type Props = {
  shots: ShotResult[];
  boardSize: number;
};
const UserTargetingBackgroundBoard = (props: Props) => {
  const { shots, boardSize } = props;

  const renderShots = useCallback((shots: ShotResult[]) => {
    return shots.map(({ coordinates, status }) => {
      return (
        <ResultCell coordinates={coordinates} key={uniqId()}>
          {status === 'hit' && <Image src={hit} alt={'hit image'} />}
          {status === 'miss' && <Image src={miss} alt={'miss image'} />}
        </ResultCell>
      );
    });
  }, []);

  /*const renderSelectedCells = useCallback((boardSize: number, shots: ShotResult[]) => {
    const numberOfCells = boardSize * boardSize - shots.length;
    const cellsArray: unknown[] = [];
    for (let i = 0; i < numberOfCells; i++) {
      cellsArray.push(TargetCell);
    }*/
  const renderSelectedCells = (boardSize: number, shots: ShotResult[]) => {
    const numberOfCells = boardSize * boardSize - shots.length;
    const cellsArray: unknown[] = [];
    for (let i = 0; i < numberOfCells; i++) {
      cellsArray.push(TargetCell);
    }

    return cellsArray.map(() => (
      <TargetCell key={uniqId()}>
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
