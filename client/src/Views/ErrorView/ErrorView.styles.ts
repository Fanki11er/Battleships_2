import styled from 'styled-components';
import { StyledProps } from '../../assets/styles/theme';
import errorBackground from '../../assets/backgrounds/error-background.png';

export const Wrapper = styled.div`
  background-color: ${(props: StyledProps) => props.theme.colors.darkBlue};
  min-height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 200px 1fr 200px;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  background: url(${errorBackground});
  background-color: ${(props: StyledProps) => props.theme.colors.darkBlue};
  background-size: cover;
  background-blend-mode: luminosity;
  background-position: 50% 40%;
  background-attachment: fixed;
`;

export const ErrorInfo = styled.h1`
  color: ${(props: StyledProps) => props.theme.colors.orange};
  font-size: ${(props: StyledProps) => props.theme.fontSizes.XXL};
  text-align: center;

  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.XL};
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.L};
  }
`;
