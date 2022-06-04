import styled from 'styled-components';
import { StyledProps } from '../../assets/styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1.6fr 250px 1fr 250px 1.6fr;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  column-gap: 30px;
  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    grid-template-columns: 1.6fr 160px 1fr 160px 1.6fr;
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    grid-template-columns: 320px 1fr;
    grid-template-rows: 100px 320px 320px;
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    grid-template-columns: 1fr;
    grid-template-rows: 100px 320px 1fr 320px 1fr;
  }
`;
