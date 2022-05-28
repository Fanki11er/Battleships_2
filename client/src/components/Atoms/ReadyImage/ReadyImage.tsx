import styled from 'styled-components';
import image from '../../../assets/Images/ready-image.svg';
import { StyledProps } from '../../../assets/styles/theme';

const StyledImage = styled.img`
  visibility: hidden;
  opacity: 0;
  animation-name: showImage;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
  grid-column: 1/4;
  grid-row: 1/3;
  justify-self: center;
  user-select: none;
  width: 80%;

  @keyframes showImage {
    to {
      visibility: visible;
      opacity: 1;
    }
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.large}) {
    grid-row: 1/3;
    align-self: center;
    justify-self: center;
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    grid-column: 1/2;
    grid-row: 2/3;
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    width: 140%;
  }
`;

const ReadyImage = () => <StyledImage src={image} alt={'Ready image'} />;

export default ReadyImage;
