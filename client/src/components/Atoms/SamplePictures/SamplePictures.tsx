import styled from 'styled-components';
import testPicture from '../../../assets/Images/pictures-test-image.svg';

const SampleImage = styled.img`
  margin-top: 100px;
  width: 790px;
  height: 380px;
`;

const SamplePictures = () => <SampleImage src={testPicture} />;

export default SamplePictures;