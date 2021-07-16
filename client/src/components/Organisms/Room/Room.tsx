import styled from 'styled-components';
import { User } from '../../../Types/types';
import RoomUserInfo from '../../Atoms/RoomUserInfo/RoomUserInfo';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 200px;
  border: 2px solid blue;
  border-radius: 5px;
`;

const RoomName = styled.div`
  font-size: 25px;
  text-align: center;
`;

const UserSlotsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
`;

const EmptyUserSlot = styled.div`
  width: 80px;
  height: 50px;
  background-color: gray;
  border: 1px solid black;
`;
type Props = {
  roomName: string;
  users: User[];
};
const Room = (props: Props) => {
  const { roomName, users } = props;

  return (
    <Wrapper>
      <RoomName>{roomName}</RoomName>
      <UserSlotsWrapper>
        {users[0] ? <RoomUserInfo userName={users[0].name} userStatus={users[0].status} /> : <EmptyUserSlot />}
        {users[1] ? <RoomUserInfo userName={users[1].name} userStatus={users[1].status} /> : <EmptyUserSlot />}
      </UserSlotsWrapper>
    </Wrapper>
  );
};

export default Room;
