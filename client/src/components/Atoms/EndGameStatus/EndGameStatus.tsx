import styled from 'styled-components';
import wonImage from '../../../assets/Images/won-image.svg';
import loseImage from '../../../assets/Images/lose-image.svg';

const StatusImage = styled.img``;

export const WonStatus = () => <StatusImage src={wonImage} alt={'Won image'} />;
export const LoseStatus = () => <StatusImage src={loseImage} alt={'Lose image'} />;
