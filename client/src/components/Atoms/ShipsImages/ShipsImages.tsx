import styled from 'styled-components';
import SizeTwoShip from '../../../assets/Images/ship-size-2-image.svg';
import SizeThreeShip from '../../../assets/Images/ship-size-3-image.svg';
import SizeFourShip from '../../../assets/Images/ship-size-4-image.svg';
import SizeFiveShip from '../../../assets/Images/ship-size-5-image.svg';

const StyledImg = styled.img`
  transform: scale(0.9);
`;

export const VeryLargeShip = () => <StyledImg src={SizeFiveShip} alt={'Very large ship'} />;
export const LargeShip = () => <StyledImg src={SizeFourShip} alt={'Large ship'} />;
export const MediumShip = () => <StyledImg src={SizeThreeShip} alt={'Medium ship'} />;
export const SmallShip = () => <StyledImg src={SizeTwoShip} alt={'Small ship'} />;
