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
  grid-column: 2/3;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TurnInfo = styled.span`
  font-size: ${(props: StyledProps) => props.theme.fontSizes.L};
  color: ${(props: StyledProps & TurnProps) => (props.isMyTurn ? props.theme.colors.okGreen : props.theme.colors.orange)};
  font-weight: bold;
`;
