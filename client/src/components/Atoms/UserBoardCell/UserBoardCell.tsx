import veryLargeShip from '../../../assets/Images/ship-size-5-image.svg';
import smallShip from '../../../assets/Images/ship-size-2-image.svg';
import mediumShip from '../../../assets/Images/ship-size-3-image.svg';
import largeShip from '../../../assets/Images/ship-size-4-image.svg';
import { BattleShip } from '../../../Class/BattleShip';
import { useEffect, useState } from 'react';
import { theme } from '../../../assets/styles/theme';
import { ShipSettings } from '../../../Types/types';
import { ExperimentalCell, LargeShip, MediumShip, SmallShip, VeryLargeShip } from './UserBoardCell.styles';

type Props = {
  ship: BattleShip;
};

const UserBoardCell = (props: Props) => {
  const { ship } = props;
  const [shipSettings, setShipSettings] = useState<ShipSettings | undefined>(undefined);

  useEffect(() => {
    placeShip(ship, theme.otherDimensions.cellSizeNumber);
  }, [ship]);

  const placeShip = (ship: BattleShip, cellSize: number) => {
    const { coordinates, size, position } = ship;
    const { x, y } = coordinates[0];

    const settings: ShipSettings = {
      width: position === 'horizontal' ? `${theme.otherDimensions.cellSizeNumber * size}px` : `${theme.otherDimensions.cellSizeNumber}px`,
      height: position === 'horizontal' ? `${theme.otherDimensions.cellSizeNumber}px` : `${theme.otherDimensions.cellSizeNumber * size}px`,
      column: position === 'horizontal' ? `${y}/${y + size}` : `${y}/${y + 1}`,
      row: position === 'horizontal' ? `${x}/${x + 1}` : `${x}/${x + size}`,
    };

    setShipSettings(settings);
  };

  return (
    <ExperimentalCell settings={shipSettings}>
      {ship.size === 2 && <SmallShip src={smallShip} orientation={ship.position} />}
      {ship.size === 3 && <MediumShip src={mediumShip} orientation={ship.position} />}
      {ship.size === 4 && <LargeShip src={largeShip} orientation={ship.position} />}
      {ship.size === 5 && <VeryLargeShip src={veryLargeShip} orientation={ship.position} />}
    </ExperimentalCell>
  );
};

export default UserBoardCell;
