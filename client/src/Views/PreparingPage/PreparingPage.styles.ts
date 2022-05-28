import styled from 'styled-components';
import { StyledProps } from '../../assets/styles/theme';
import Board from '../../components/Molecules/Board/Board';

export const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 33% 1fr 33%;
  grid-template-rows: 0.65fr 0.5fr;
  justify-content: center;
  align-items: center;
  padding: 0 35px;
  overflow-x: hidden;

  @media screen and (${(props: StyledProps) => props.theme.devices.large}) {
    padding: 5px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 350px 1fr;
    margin: 20px 0;
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    padding: 5px;
    grid-template-columns: 1fr;
    grid-template-rows: 200px 350px 1fr;
  }
`;

export const StyledBoard = styled(Board)`
  grid-column: 2/3;
  grid-row: 1/2;

  @media screen and (${(props: StyledProps) => props.theme.devices.large}) {
    grid-row: 1/2;
    grid-column: 2/3;
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
`;

export const ShipsListWrapper = styled.div`
  display: flex;
  grid-column: 1/4;
  grid-row: 2/3;
  justify-content: center;
  align-items: center;
  width: 100%;
  /*@media screen and (${(props: StyledProps) => props.theme.devices.large}) {
    grid-column: 3/4;
    grid-row: 1/2;
  }*/

  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    grid-column: 1/2;
    grid-row: 3/4;
  }
`;
