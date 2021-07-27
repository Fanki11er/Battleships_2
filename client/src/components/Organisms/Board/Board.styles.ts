import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

export const StyledBoard = styled.div`
  display: grid;
  grid-template-rows: repeat(10, ${(props: StyledProps) => props.theme.otherDimensions.cellSize});
  grid-template-columns: repeat(10, ${(props: StyledProps) => props.theme.otherDimensions.cellSize});
  grid-gap: 1px;
  width: fit-content;
  height: fit-content;
`;
