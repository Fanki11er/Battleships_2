import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

export const StyledBoard = styled.div`
  display: grid;
  grid-template-rows: repeat(10, ${(props: StyledProps) => props.theme.otherDimensions.cellSize});
  grid-template-columns: repeat(10, ${(props: StyledProps) => props.theme.otherDimensions.cellSize});
  grid-gap: 2px;
  width: calc(10 * ${(props: StyledProps) => props.theme.otherDimensions.cellSize});
  height: calc(10 * ${(props: StyledProps) => props.theme.otherDimensions.cellSize});
  justify-content: center;
  align-items: center;
  align-self: center;
  justify-self: center;

  @media screen and (${(props: StyledProps) => props.theme.devices.large}) {
    grid-template-rows: repeat(10, ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`});
    grid-template-columns: repeat(10, ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`});
    width: calc(10 * ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`});
    height: calc(10 * ${(props: StyledProps) => `${props.theme.otherDimensions.smallCellSize}px`});
    grid-gap: 1px;
  }
`;
