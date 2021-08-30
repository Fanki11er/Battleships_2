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
  grid-template-rows: 200px 200px 700px 700px 100px 150px;
  row-gap: 50px;

  @media screen and (max-width: 860px) {
    grid-template-rows: 150px 150px 450px 400px 100px 100px;
    background-position: 50% 40%;
  }

  @media screen and (max-width: 600px) {
    grid-template-rows: 270px 150px 250px 300px 100px 100px;
    row-gap: 25px;
  }
`;

export const TopWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
  align-items: center;

  @media screen and (max-width: 1920px) {
    grid-template-columns: 40% 60%;
  }

  @media screen and (max-width: 600px) {
    grid-template-rows: 50% 50%;
    grid-template-columns: 1fr;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
