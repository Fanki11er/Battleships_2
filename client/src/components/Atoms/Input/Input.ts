import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

export const Input = styled.input`
  width: 75%;
  padding: 5px 8px;
  border: 3px solid ${(props: StyledProps) => props.theme.colors.myBlue};
  font-size: ${(props: StyledProps) => props.theme.fontSizes.M};
  background-color: transparent;
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;
  color: ${(props: StyledProps) => props.theme.colors.green};
  text-align: center;
  font-weight: bold;

  &:focus {
    //!Correct
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;
