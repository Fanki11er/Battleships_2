import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

type TurnProps = {
  isMyTurn: boolean;
};

export const Wrapper = styled.div`
  width: 300px;
  height: 80px;
  border: 3px solid ${(props: StyledProps) => props.theme.colors.green};
  border-radius: 15px;
  grid-row: 1/2;
  grid-column: 3/4;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  user-select: none;
  backdrop-filter: blur(5px);
  background-color: ${(props: StyledProps) => props.theme.colors.transparentDarkBlue};

  @media screen and (${(props: StyledProps) => props.theme.devices.large}) {
    width: 200px;
    height: 45px;
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    grid-column: 1/3;
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    grid-column: 1/1;
    grid-row: 1/1;
  }
`;

export const TurnInfo = styled.span`
  font-size: ${(props: StyledProps) => props.theme.fontSizes.L};
  color: ${(props: StyledProps & TurnProps) => (props.isMyTurn ? props.theme.colors.okGreen : props.theme.colors.orange)};
  font-weight: bold;

  @media screen and (${(props: StyledProps) => props.theme.devices.large}) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.S};
  }
`;
