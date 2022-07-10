import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

type DotProp = {
  progress: number;
};

export const StyledDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props: StyledProps & DotProp) => (props.progress ? props.theme.colors.myBlue : props.theme.colors.darkGray)};
`;
