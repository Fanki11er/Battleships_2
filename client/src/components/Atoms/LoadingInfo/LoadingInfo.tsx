import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { ReactComponent as Loading } from '../../../assets/Images/LoadingInfo.svg';

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-top: 50px;
`;

const LoadingSvg = styled(Loading)`
  width: 75%;
  height: 75%;
  border-radius: 50%;
  animation-name: rotation;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  transition: transform ease-in-out;

  @media screen and (${(props: StyledProps) => props.theme.devices.large}) {
    width: 50%;
    height: 50%;
  }
  @keyframes rotation {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Text = styled.span`
  font-size: ${(props: StyledProps) => props.theme.fontSizes.XXL};
  color: ${(props: StyledProps) => props.theme.colors.green};
  font-weight: bold;
  user-select: none;
  text-align: center;
  letter-spacing: 5px;

  @media screen and (${(props: StyledProps) => props.theme.devices.large}) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.XL};
  }
`;

const LoadingInfo = () => (
  <Wrapper>
    <LoadingSvg />
    <Text>Loading...</Text>
  </Wrapper>
);

export default LoadingInfo;
