import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { ReactComponent as IconEmpty } from '../../../assets/icons/icon-forbidden.svg';

export const Wrapper = styled.div`
  width: 185px;
  height: 50px;
  display: flex;
  margin: 15px;
  padding: 0 20px;
  border-radius: 10px;
  border: 2px solid ${(props: StyledProps) => props.theme.colors.myBlue};
  justify-content: flex-start;
  align-items: center;
  font-family: 'Montserrat';
`;

export const Label = styled.div`
  font-size: ${(props: StyledProps) => props.theme.fontSizes.M};
  font-weight: bold;
  text-align: center;
  color: ${(props: StyledProps) => props.theme.colors.myBlue};
  text-transform: uppercase;
  margin-left: 30px;
`;

export const StyledEmptyIcon = styled(IconEmpty)`
  width: 25px;
  height: 25px;
`;
