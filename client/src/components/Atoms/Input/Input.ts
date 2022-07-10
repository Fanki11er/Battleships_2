import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

export const Input = styled.input`
  width: 80%;
  height: 45px;
  padding: 5px 8px;
  border: 3px solid ${(props: StyledProps) => props.theme.colors.myBlue};
  font-size: ${(props: StyledProps) => props.theme.fontSizes.M};
  background-color: transparent;
  box-sizing: border-box;
  border-radius: 10px;
  color: ${(props: StyledProps) => props.theme.colors.green};
  text-align: center;
  font-weight: bold;
  &::placeholder {
    color: ${(props: StyledProps) => props.theme.colors.transparentGreen};
    font-weight: bold;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px ${(props: StyledProps) => props.theme.colors.transparentMyBlue};
  }

  @media screen and (min-width: 3000px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.L};
    height: 55px;
  }

  @media screen and (max-width: 1540px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.S};
    padding: 2px 4px;
    height: 35px;
  }

  @media screen and (max-width: 860px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.XS};
  }
`;
