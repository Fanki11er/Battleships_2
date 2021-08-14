import styled from 'styled-components';
import background from '../../../assets/Images/list-background-image.svg';
import shipSize_2 from '../../../assets/Images/ship-size-2-image.svg';
import shipSize_3 from '../../../assets/Images/ship-size-3-image.svg';
import shipSize_4 from '../../../assets/Images/ship-size-4-image.svg';
import shipSize_5 from '../../../assets/Images/ship-size-5-image.svg';
import { StyledProps } from '../../../assets/styles/theme';

const Wrapper = styled.li`
  width: 100%;
  height: 45px;
  background-color: transparent;
  margin: 5px 0;
`;

const ShipContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  &::after {
    content: '';
    background-color: ${(props: StyledProps & Pick<Props, 'isSunk'>) => (props.isSunk ? props.theme.colors.transparentRed : 'transparent')};
    transition: background-color 0.5s;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 3px solid transparent;
    animation-name: ${(props: StyledProps & Pick<Props, 'isSunk'>) => (props.isSunk ? 'select' : 'none')};
    animation-duration: 4s;
    animation-fill-mode: forwards;

    @keyframes select {
      30% {
        border: 3px solid ${(props: StyledProps) => props.theme.colors.orange};
      }
      100% {
        border: 3px transparent;
      }
    }
  }
`;

const Ship = styled.img`
  transform-origin: 50% 0;
  position: absolute;
  bottom: auto;
  left: auto;
`;

const Background = styled.img`
  width: 100%;
`;

type Props = {
  size: number;
  isSunk: boolean;
};

const ShipsLeftListShip = (props: Props) => {
  const { isSunk, size } = props;
  return (
    <Wrapper>
      <ShipContainer isSunk={isSunk}>
        <Background src={background} alt={'Background'}></Background>
        {size === 2 && <Ship src={shipSize_2} alt={'Ship'} />}
        {size === 3 && <Ship src={shipSize_3} alt={'Ship'} />}
        {size === 4 && <Ship src={shipSize_4} alt={'Ship'} />}
        {size === 5 && <Ship src={shipSize_5} alt={'Ship'} />}
      </ShipContainer>
    </Wrapper>
  );
};

export default ShipsLeftListShip;
