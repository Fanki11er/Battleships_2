import styled from 'styled-components';
import { StyledProps } from '../../assets/styles/theme';
import ShipsLeftList from '../../components/Molecules/ShipsLeftList/ShipsLeftList';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1.6fr 160px 1fr 160px 1.6fr;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    grid-template-columns: 1fr;
    grid-template-rows: 100px 320px 1fr 320px 1fr;
  }
`;

export const StyledMyList = styled(ShipsLeftList)`
  grid-row: 1/2;
  grid-column: 2/3;

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    grid-row: 7/8;
    grid-column: 1/2;
  }
`;

export const StyledOpponentList = styled(ShipsLeftList)`
  grid-row: 1/2;
  grid-column: 2/3;

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    grid-row: 3/4;
    grid-column: 1/2;
  }
`;
