import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

export const StyledBoard = styled.div`
  display: grid;
  grid-template-rows: repeat(10, ${(props: StyledProps) => props.theme.otherDimensions.cellSize});
  grid-template-columns: repeat(10, ${(props: StyledProps) => props.theme.otherDimensions.cellSize});
  grid-gap: 2px;
  width: calc(10 * ${(props: StyledProps) => props.theme.otherDimensions.cellSize} + 40px);
  height: calc(10 * ${(props: StyledProps) => props.theme.otherDimensions.cellSize} + 40px);
  justify-content: center;
  align-items: center;
`;
