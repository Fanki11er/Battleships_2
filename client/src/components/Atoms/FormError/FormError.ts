import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

export const StyledFormError = styled.span`
  width: 100%;
  padding: 8px;
  text-align: center;
  color: ${(props: StyledProps) => props.theme.colors.red};
  background-color: ${(props: StyledProps) => props.theme.colors.pink};
  position: absolute;
  left: 0;
  bottom: -80%;
  font-size: ${(props: StyledProps) => props.theme.fontSizes.S};
  font-weight: bold;
  border-radius: 10px;
`;
