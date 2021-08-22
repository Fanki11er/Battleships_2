import styled from 'styled-components';
import sampleImage from '../../../assets/Images/sample-image.svg';

const SampleImage = styled.img`
  margin-top: 50px;
  width: 90%;
  height: 90%;
`;

const SamplePictures = () => <SampleImage src={sampleImage} />;

export default SamplePictures;
