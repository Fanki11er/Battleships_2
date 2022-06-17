import styled from 'styled-components';
import sampleImage from '../../../assets/Images/sample-image.png';

const SampleImage = styled.img`
  margin-top: 50px;
  width: 60%;

  @media screen and (max-width: 860px) {
    width: 60%;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
    margin-top: 10px;
  }
`;

const SamplePictures = () => <SampleImage src={sampleImage} alt={'Sample image'} />;

export default SamplePictures;
