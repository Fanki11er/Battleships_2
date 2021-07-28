import styled from 'styled-components';
import Board from '../../components/Organisms/Board/Board';
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 33% 1fr 33%;
  grid-template-rows: 75% 1fr;
  justify-content: center;
  align-items: center;
  padding: 0 35px;
`;

export const StyledBoard = styled(Board)`
  grid-column: 2/3;
  grid-row: 1/2;
`;

export const ShipsListWrapper = styled.div`
  display: flex;
  grid-column: 1/5;
  grid-row: 2/3;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
