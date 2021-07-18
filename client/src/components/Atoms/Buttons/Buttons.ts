import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

export const StandardButton = styled.button`
  width: 155px;
  height: 55px;
  border-radius: 10px;
  border: 3px solid ${(props: StyledProps) => props.theme.colors.yellow};
  font-size: ${(props: StyledProps) => props.theme.fontSizes.M};
  font-weight: bold;
  color: ${(props: StyledProps) => props.theme.colors.yellow};
  background-color: transparent;
`;
