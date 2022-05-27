import styled from 'styled-components';
import wonImage from '../../../assets/Images/won-image.svg';
import loseImage from '../../../assets/Images/lose-image.svg';
import { StyledProps } from '../../../assets/styles/theme';

const StatusImage = styled.img`
  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    margin-top: 25vh;
    width: 100%;
  }
  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    width: 140%;
  }
`;

export const WonStatus = () => <StatusImage src={wonImage} alt={'Won image'} />;
export const LoseStatus = () => <StatusImage src={loseImage} alt={'Lose image'} />;
