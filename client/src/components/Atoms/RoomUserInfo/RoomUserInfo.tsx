import styled from 'styled-components';
import { UserStatus } from '../../../Types/types';

const Wrapper = styled.div`
  width: 80px;
  height: 50px;
  display: flex;
  margin: 15px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
`;

const UserName = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const StyledUserStatus = styled.div`
  width: 25px;
  height: 25px;
  background-color: green;
  border-radius: 50%;
  margin: 5px;
`;

type Props = {
  userName: string;
  userStatus: UserStatus;
};
const RoomUserInfo = (props: Props) => {
  const { userName } = props;
  return (
    <Wrapper>
      <UserName>{userName}</UserName>
      <StyledUserStatus></StyledUserStatus>
    </Wrapper>
  );
};

export default RoomUserInfo;
