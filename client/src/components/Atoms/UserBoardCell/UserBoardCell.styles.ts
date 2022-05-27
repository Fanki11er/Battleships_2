import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { Position } from '../../../Class/BattleShip';
import { ShipSettings } from '../../../Types/types';
type Settings = {
  settings: ShipSettings | undefined;
};

type ImageProps = {
  orientation: Position;
};
export const ExperimentalCell = styled.div`
  width: ${(props: Settings & ImageProps & StyledProps) =>
    props.settings?.setContainerWidth(props.orientation, props.settings.shipSize, props.theme.otherDimensions.cellSizeNumber)};
  background-color: ${(props: StyledProps) => props.theme.colors.water};
  position: relative;
  grid-row: ${(props: Settings) => props.settings?.row};
  grid-column: ${(props: Settings) => props.settings?.column};
  overflow: clip;

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    width: ${(props: Settings & ImageProps & StyledProps) =>
      props.settings?.setContainerWidth(props.orientation, props.settings.shipSize, props.theme.otherDimensions.smallCellSize)};
    height: ${(props: Settings & ImageProps & StyledProps) =>
      props.settings?.setContainerHeight(props.orientation, props.settings.shipSize, props.theme.otherDimensions.smallCellSize)};
  }
`;

export const SmallShip = styled.img`
  height: 45px;
  position: absolute;
  left: 0;
  top: 0;
  top: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '10px' : '30px')};
  left: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '7px' : '-23px')};
  transform: ${(props: ImageProps) => (props.orientation === 'vertical' ? `rotate(90deg) rotateY(180deg)` : ` rotate(0) rotateY(0)`)};

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    position: absolute;
    height: 30px;
    top: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '5px' : '16px')};
    left: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '2px' : '-17px')};
  }
`;

export const MediumShip = styled.img`
  height: 55px;
  position: absolute;
  top: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '2px' : '45px')};
  left: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '20px' : '-30px')};
  transform: ${(props: ImageProps) => (props.orientation === 'vertical' ? `rotate(90deg) rotateY(180deg)` : ` rotate(0) rotateY(0)`)};

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    position: absolute;
    height: 35px;
    top: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '-0px' : '30px')};
    left: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '12px' : '-20px')};
  }
`;

export const LargeShip = styled.img`
  height: 65px;
  position: absolute;
  top: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '0px' : '65px')};
  left: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '15px' : '-60px')};
  transform: ${(props: ImageProps) => (props.orientation === 'vertical' ? `rotate(90deg) rotateY(180deg)` : ` rotate(0) rotateY(0)`)};

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    position: absolute;
    height: 45px;
    top: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '-5px' : '40px')};
    left: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '5px' : '-43px')};
  }
`;

export const VeryLargeShip = styled.img`
  height: 85px;
  position: absolute;
  top: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '-5px' : '80px')};
  left: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '15px' : '-85px')};
  transform: ${(props: ImageProps) => (props.orientation === 'vertical' ? `rotate(90deg) rotateY(180deg)` : ` rotate(0) rotateY(0)`)};

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    position: absolute;
    height: 55px;
    top: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '-5px' : '50px')};
    left: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '15px' : '-58px')};
  }
`;
