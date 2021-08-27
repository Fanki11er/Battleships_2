import styled from 'styled-components';
import image from '../../../assets/Images/ready-image.svg';

const StyledImage = styled.img`
  visibility: hidden;
  opacity: 0;
  animation-name: showImage;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
  grid-column: 1/4;
  grid-row: 1/2;
  justify-self: center;
  user-select: none;

  @keyframes showImage {
    to {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const ReadyImage = () => <StyledImage src={image} alt={'Ready image'} />;

export default ReadyImage;
