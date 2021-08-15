import { useEffect, useState } from 'react';
import { Coordinates } from '../../../Class/BattleShip';
import { Cell } from './TargetingCell.styles';

type Props = {
  coordinates: Coordinates;
  handleShot: (coordinates: Coordinates) => void;
  isMyTurn: boolean;
};
const TargetingCell = (props: Props) => {
  const { coordinates, handleShot, isMyTurn } = props;
  const [cellCoordinates, setCellCoordinates] = useState<Coordinates>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  const handleHide = () => {
    setIsVisible(false);
  };
  const handleClick = () => {
    handleHide();
    handleShot(cellCoordinates);
  };
  useEffect(() => {
    setCellCoordinates(coordinates);
  }, [coordinates]);
  return <Cell isVisible={isVisible} onClick={() => (isMyTurn ? handleClick() : null)} isMyTurn={isMyTurn} />;
};

export default TargetingCell;
