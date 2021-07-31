import styled from 'styled-components';
import { StyledProps, theme } from '../../../assets/styles/theme';
import veryLargeShip from '../../../assets/Images/size-5-ship-image.svg';
import smallShip from '../../../assets/Images/size-two-ship-image.svg';
import mediumShip from '../../../assets/Images/size-3-ship-image.svg';
import largeShip from '../../../assets/Images/size-4-ship-image.svg';
import { BattleShip, Position } from '../../../Class/BattleShip';
import { useEffect, useState } from 'react';

type Settings = {
  settings: ShipSettings | undefined;
};
const ExperimentalCell = styled.div`
  width: ${(props: Settings) => props.settings?.width};
  height: ${(props: Settings) => props.settings?.height};
  background-color: ${(props: StyledProps) => props.theme.colors.water};
  position: relative;
  grid-row: ${(props: Settings) => props.settings?.row};
  grid-column: ${(props: Settings) => props.settings?.column};
  overflow: clip;
`;
type ImageProps = {
  orientation: Position;
};

const SmallShip = styled.img`
  height: 60px;
  position: absolute;
  left: 0;
  top: 0;
  top: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '0px' : '20px')};
  left: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '0px' : '-35px')};
  transform: ${(props: ImageProps) => (props.orientation === 'vertical' ? `rotate(90deg) rotateY(180deg)` : ` rotate(0) rotateY(0)`)};
`;

const MediumShip = styled.img`
  height: 65px;
  position: absolute;
  top: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '0px' : '45px')};
  left: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '15px' : '-35px')};
  transform: ${(props: ImageProps) => (props.orientation === 'vertical' ? `rotate(90deg) rotateY(180deg)` : ` rotate(0) rotateY(0)`)};
`;

const LargeShip = styled.img`
  height: 80px;
  position: absolute;
  top: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '-5px' : '60px')};
  left: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '10px' : '-70px')};
  transform: ${(props: ImageProps) => (props.orientation === 'vertical' ? `rotate(90deg) rotateY(180deg)` : ` rotate(0) rotateY(0)`)};
`;

const VeryLargeShip = styled.img`
  height: 150px;
  position: absolute;
  top: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '-60px' : '55px')};
  left: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '-5px' : '-85px')};
  transform: ${(props: ImageProps) => (props.orientation === 'vertical' ? `rotate(90deg) rotateY(180deg)` : ` rotate(0) rotateY(0)`)};
`;

type Props = {
  ship: BattleShip;
};

type ShipSettings = {
  column: string;
  row: string;
  width: string;
  height: string;
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
      column: position === 'horizontal' ? `${x}/${x + size}` : `${x}/${x + 1}`,
      row: position === 'horizontal' ? `${y}/${y + 1}` : `${y}/${y + size}`,
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
