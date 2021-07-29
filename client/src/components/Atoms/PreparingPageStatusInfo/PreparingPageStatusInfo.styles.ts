import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { UserStatus } from '../../../Types/types';

const selectColor = (props: StyledProps & UserProps) => {
  const { status, theme } = props;
  if (status === 'ready') return theme.colors.okGreen;
  if (status === 'preparing') return theme.colors.orange;
  return 'red';
};

export const Wrapper = styled.div`
  width: 360px;
  height: 160px;
  border: 3px solid ${(props: StyledProps) => props.theme.colors.green};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 25px 45px;
  grid-column: 1/2;
  grid-row: 1/2;
`;

export const UserInfo = styled.span`
  color: ${(props: StyledProps & UserProps) => selectColor(props)};
  font-size: ${(props: StyledProps) => props.theme.fontSizes.S};
  font-weight: bold;
`;

type UserProps = {
  status: UserStatus | undefined;
};
