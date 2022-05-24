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
  align-self: center;
  justify-self: center;

  @media screen and (min-width: 3000px) {
    grid-template-rows: repeat(10, ${(props: StyledProps) => `${props.theme.otherDimensions.largeCellSize}px`});
    grid-template-columns: repeat(10, ${(props: StyledProps) => `${props.theme.otherDimensions.largeCellSize}px`});
    width: calc(10 * ${(props: StyledProps) => `${props.theme.otherDimensions.largeCellSize}px`} + 5px);
    height: calc(10 * ${(props: StyledProps) => `${props.theme.otherDimensions.largeCellSize}px`} + 5px);
  }

  @media screen and (max-width: 560px) {
    grid-template-rows: repeat(10, ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`});
    grid-template-columns: repeat(10, ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`});
    width: calc(10 * ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`} + 5px);
    height: calc(10 * ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`} + 5px);
    grid-gap: 1px;
  }
`;
