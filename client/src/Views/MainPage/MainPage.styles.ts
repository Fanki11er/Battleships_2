import styled from 'styled-components';
import { StyledProps } from '../../assets/styles/theme';
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props: StyledProps) => props.theme.colors.darkBlue};
`;
