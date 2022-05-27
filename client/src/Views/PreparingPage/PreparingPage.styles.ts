import styled from 'styled-components';
import { StyledProps } from '../../assets/styles/theme';
import Board from '../../components/Molecules/Board/Board';
export const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: grid;
  grid-template-columns: 33% 1fr 33%;
  grid-template-rows: 75% 1fr;
  justify-content: center;
  align-items: center;
  padding: 0 35px;
  overflow-x: hidden;

  @media screen and (min-width: 3000px) {
    height: 1100px;
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    height: auto;
    padding: 5px;
    grid-template-columns: 1fr;
    grid-template-rows: 200px 350px 1fr;
    margin: 20px 0;
  }
`;

export const StyledBoard = styled(Board)`
  grid-column: 2/3;
  grid-row: 1/2;

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
`;

export const ShipsListWrapper = styled.div`
  display: flex;
  grid-column: 1/5;
  grid-row: 2/3;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    grid-column: 1/2;
    grid-row: 3/4;
  }
`;
