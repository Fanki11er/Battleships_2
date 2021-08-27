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
  width: ${(props: Settings) => props.settings?.width};
  height: ${(props: Settings) => props.settings?.height};
  background-color: ${(props: StyledProps) => props.theme.colors.water};
  position: relative;
  grid-row: ${(props: Settings) => props.settings?.row};
  grid-column: ${(props: Settings) => props.settings?.column};
  overflow: clip;
`;

export const SmallShip = styled.img`
  height: 45px;
  position: absolute;
  left: 0;
  top: 0;
  top: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '10px' : '30px')};
  left: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '7px' : '-23px')};
  transform: ${(props: ImageProps) => (props.orientation === 'vertical' ? `rotate(90deg) rotateY(180deg)` : ` rotate(0) rotateY(0)`)};
`;

export const MediumShip = styled.img`
  height: 55px;
  position: absolute;
  top: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '2px' : '45px')};
  left: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '20px' : '-30px')};
  transform: ${(props: ImageProps) => (props.orientation === 'vertical' ? `rotate(90deg) rotateY(180deg)` : ` rotate(0) rotateY(0)`)};
`;

export const LargeShip = styled.img`
  height: 65px;
  position: absolute;
  top: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '0px' : '65px')};
  left: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '15px' : '-60px')};
  transform: ${(props: ImageProps) => (props.orientation === 'vertical' ? `rotate(90deg) rotateY(180deg)` : ` rotate(0) rotateY(0)`)};
`;

export const VeryLargeShip = styled.img`
  height: 85px;
  position: absolute;
  top: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '-5px' : '80px')};
  left: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '15px' : '-85px')};
  transform: ${(props: ImageProps) => (props.orientation === 'vertical' ? `rotate(90deg) rotateY(180deg)` : ` rotate(0) rotateY(0)`)};
`;
