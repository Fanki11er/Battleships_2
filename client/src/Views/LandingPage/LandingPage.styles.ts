import styled from 'styled-components';
import backgroundImage from '../../assets/backgrounds/landing-page-background.svg';
import { StyledProps } from '../../assets/styles/theme';

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background: url(${backgroundImage});
  background-color: ${(props: StyledProps) => props.theme.colors.darkBlue};
  background-size: cover;
  background-blend-mode: luminosity;
  background-position: 0 40%;
  background-attachment: fixed;
  display: grid;
  grid-template-rows: 200px 200px 500px 700px 100px 150px;
`;

export const TopWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
