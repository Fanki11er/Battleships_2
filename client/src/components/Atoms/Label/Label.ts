import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

export const Label = styled.label`
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: ${(props: StyledProps) => props.theme.fontSizes.L};
  color: ${(props: StyledProps) => props.theme.colors.green};
  text-align: center;
`;
