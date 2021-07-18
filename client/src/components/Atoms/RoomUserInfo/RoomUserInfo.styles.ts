import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { UserStatus } from '../../../Types/types';
import { ReactComponent as PersonIcon } from '../../../assets/icons/icon-person.svg';
import { ReactComponent as ComputerIcon } from '../../../assets/icons/icon-computer.svg';

type Props = {
  userStatus: UserStatus;
  isComputer?: boolean;
};

export const Wrapper = styled.div`
  width: 185px;
  height: 50px;
  display: flex;
  margin: 15px;
  padding: 0 15px;
  border-radius: 10px;
  border: 2px solid ${(props: StyledProps) => props.theme.colors.myBlue};
  justify-content: space-between;
  align-items: center;
  font-family: 'Montserrat';
`;

export const UserName = styled.div`
  font-size: ${(props: StyledProps) => props.theme.fontSizes.M};
  font-weight: bold;
  text-align: center;
  color: ${(props: StyledProps) => props.theme.colors.myBlue};
`;

export const StyledUserStatus = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${(props: StyledProps & Props) =>
    props.userStatus === 'preparing' && !props.isComputer ? props.theme.colors.orange : props.theme.colors.green};
  border-radius: 50%;
  margin: 5px;
`;

export const StyledPersonIcon = styled(PersonIcon)`
  width: 25px;
  height: 25px;
`;

export const StyledComputerIcon = styled(ComputerIcon)`
  width: 30px;
  height: 30px;
`;
