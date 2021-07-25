import styled from 'styled-components';
import SizeTwoShip from '../../../assets/Images/size-two-ship-image.svg';
import SizeThreeShip from '../../../assets/Images/size-3-ship-image.svg';
import SizeFourShip from '../../../assets/Images/size-4-ship-image.svg';
import SizeFiveShip from '../../../assets/Images/size-5-ship-image.svg';

const StyledImg = styled.img`
  transform: scale(0.8);
`;

export const VeryLargeShip = () => <StyledImg src={SizeFiveShip} alt={'Very large ship'} />;
export const LargeShip = () => <StyledImg src={SizeFourShip} alt={'Large ship'} />;
export const MediumShip = () => <StyledImg src={SizeThreeShip} alt={'Medium ship'} />;
export const SmallShip = () => <StyledImg src={SizeTwoShip} alt={'Small ship'} />;
