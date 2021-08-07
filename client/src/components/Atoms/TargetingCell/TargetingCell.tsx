import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { Coordinates } from '../../../Class/BattleShip';
type CellProps = {
  isVisible: boolean;
  isMyTurn: boolean;
};

const Cell = styled.div`
  width: ${(props: StyledProps) => `${props.theme.otherDimensions.cellSizeNumber}px`};
  height: ${(props: StyledProps) => `${props.theme.otherDimensions.cellSizeNumber}px`};
  background-color: ${(props: StyledProps) => props.theme.colors.darkGray};
  visibility: ${(props: StyledProps & CellProps) => (props.isVisible ? 'visible' : 'hidden')};
  user-select: ${(props: StyledProps & CellProps) => (props.isVisible ? 'inherit' : 'none')};
  transition: all 0.3s;
  &:hover {
    background-color: ${(props: StyledProps & CellProps) => (props.isMyTurn ? props.theme.colors.orange : props.theme.colors.darkGray)};
    cursor: ${(props: StyledProps & CellProps) => (props.isMyTurn ? 'crosshair' : 'not-allowed')};
  }
`;
type Props = {
  coordinates: Coordinates;
  handleShot: (coordinates: Coordinates) => void;
  isMyTurn: boolean;
};
const TargetingCell = (props: Props) => {
  const { coordinates, handleShot, isMyTurn } = props;
  const [coord, setCoord] = useState<Coordinates>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  const handleHide = () => {
    setIsVisible(false);
  };
  const handleClick = () => {
    handleHide();
    handleShot(coord);
  };
  useEffect(() => {
    setCoord(coordinates);
  }, [coordinates]);
  return <Cell isVisible={isVisible} onClick={() => (isMyTurn ? handleClick() : null)} isMyTurn={isMyTurn} />;
};

export default TargetingCell;
