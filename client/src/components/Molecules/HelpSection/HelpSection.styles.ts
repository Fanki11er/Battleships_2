import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

export const HelpSectionWrapper = styled.section`
  border: 3px solid ${(props: StyledProps) => props.theme.colors.myBlue};
  background-color: ${(props: StyledProps) => props.theme.colors.darkBlue};
  border-radius: 15px;
  display: grid;
  padding: 40px;
  justify-content: center;
  align-items: center;
  user-select: none;
  width: 95%;
  max-width: 700px;
  grid-template-rows: 250px 80px 40px;
  line-height: 1.5;

  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    max-width: 420px;
    grid-template-rows: 240px 25px 30px;
    grid-gap: 5px;
    line-height: 1.3;
    padding: 20px;
  }
`;

export const HelpText = styled.span`
  width: 100%;
  height: 100%;
  color: ${(props: StyledProps) => props.theme.colors.myBlue};
  font-size: ${(props: StyledProps) => props.theme.fontSizes.M};
  font-weight: bold;
  text-align: justify;

  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.S};
  }
`;

export const HelpImage = styled.img`
  height: 120%;
  justify-self: center;
  align-self: center;
  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    height: 100%;
  }
`;

export const HelpContentWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 120px 115px;
  opacity: 0;
  height: 100%;

  animation-name: show;
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;

  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    grid-template-rows: 105x 130px;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ControlsWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-self: center;
  justify-self: center;
  padding: 0 10px;
  height: 30px;
  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    height: 40px;
  }
`;
