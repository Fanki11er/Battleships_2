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
  height: 60px;
  position: absolute;
  left: 0;
  top: 0;
  top: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '0px' : '20px')};
  left: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '0px' : '-35px')};
  transform: ${(props: ImageProps) => (props.orientation === 'vertical' ? `rotate(90deg) rotateY(180deg)` : ` rotate(0) rotateY(0)`)};
`;

export const MediumShip = styled.img`
  height: 65px;
  position: absolute;
  top: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '0px' : '45px')};
  left: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '15px' : '-35px')};
  transform: ${(props: ImageProps) => (props.orientation === 'vertical' ? `rotate(90deg) rotateY(180deg)` : ` rotate(0) rotateY(0)`)};
`;

export const LargeShip = styled.img`
  height: 80px;
  position: absolute;
  top: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '-5px' : '60px')};
  left: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '10px' : '-70px')};
  transform: ${(props: ImageProps) => (props.orientation === 'vertical' ? `rotate(90deg) rotateY(180deg)` : ` rotate(0) rotateY(0)`)};
`;

export const VeryLargeShip = styled.img`
  height: 150px;
  position: absolute;
  top: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '-60px' : '55px')};
  left: ${(props: ImageProps) => (props.orientation === 'horizontal' ? '-5px' : '-85px')};
  transform: ${(props: ImageProps) => (props.orientation === 'vertical' ? `rotate(90deg) rotateY(180deg)` : ` rotate(0) rotateY(0)`)};
`;
