import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

export const HelpSectionWrapper = styled.section`
  border: 3px solid ${(props: StyledProps) => props.theme.colors.myBlue};
  background-color: ${(props: StyledProps) => props.theme.colors.darkBlue};
  border-radius: 15px;
  display: grid;
  padding: 20px;
  justify-content: center;
  align-items: center;
  user-select: none;

  @media screen and (max-width: 560px) {
    width: 95%;
    grid-template-rows: 225px 25px 30px;
    grid-gap: 5px;
    line-height: 1.3;
  }
`;

export const HelpText = styled.span`
  width: 100%;
  height: 100%;
  color: ${(props: StyledProps) => props.theme.colors.myBlue};
  font-size: ${(props: StyledProps) => props.theme.fontSizes.S};
  font-weight: bold;
  text-align: justify;
`;

export const HelpImage = styled.img`
  transform: scale(1.2);
  justify-self: center;
  align-self: center;
`;

export const HelpContentWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 105x 115px;
  opacity: 0;
  height: 100%;

  animation-name: show;
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;

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
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 10px;
`;
