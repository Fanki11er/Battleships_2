import styled from 'styled-components';
import { UserStatus } from '../../../Types/types';

type StyledProps = {
  userStatus: UserStatus;
};

const Wrapper = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  margin: 15px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
  justify-content: space-between;
  align-items: center;
`;

const UserName = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const StyledUserStatus = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${(props: StyledProps) => (props.userStatus === 'preparing' ? 'orange' : 'green')};
  border-radius: 50%;
  margin: 5px;
`;

type Props = {
  userName: string;
  userStatus: UserStatus;
};
const RoomUserInfo = (props: Props) => {
  const { userName, userStatus } = props;
  return (
    <Wrapper>
      <UserName>{userName}</UserName>
      <StyledUserStatus userStatus={userStatus} />
    </Wrapper>
  );
};

export default RoomUserInfo;
