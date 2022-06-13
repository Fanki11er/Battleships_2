import styled from 'styled-components';
import { StyledProps } from '../../assets/styles/theme';

export const Wrapper = styled.div`
  background-color: ${(props: StyledProps) => props.theme.colors.darkBlue};
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
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
