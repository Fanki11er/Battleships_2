import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

interface ListProps {
  owner: 'ME' | 'OPPONENT';
}

export const Wrapper = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  backdrop-filter: blur(2px);
  background-color: ${(props: StyledProps) => props.theme.colors.transparentDarkBlue};
  grid-row: ${(props: ListProps & StyledProps) => (props.owner === 'ME' ? '1/2' : '1/2')};
  grid-column: ${(props: ListProps & StyledProps) => (props.owner === 'ME' ? '2/3' : '4/5')};

  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    padding: 15px 0;
    flex-flow: row wrap;
    justify-content: space-evenly;
    grid-row: ${(props: ListProps & StyledProps) => (props.owner === 'ME' ? '3/4' : '2/3')};
    grid-column: ${(props: ListProps & StyledProps) => (props.owner === 'ME' ? '2/3' : '2/3')};
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    grid-row: ${(props: ListProps & StyledProps) => (props.owner === 'ME' ? '5/6' : '3/4')};
    grid-column: ${(props: ListProps & StyledProps) => (props.owner === 'ME' ? '1/2' : '1/2')};
  }
`;
