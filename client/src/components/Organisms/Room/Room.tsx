import RoomUserInfo from '../../Atoms/RoomUserInfo/RoomUserInfo';
import { User } from '../../../Types/types';
import { RoomName, UserSlotsWrapper, Wrapper } from './Room.styles';
import { StandardButton } from '../../Atoms/Buttons/Buttons';
import EmptyRoomInfo from '../../Atoms/EmptyRoomInfo/EmptyRoomInfo';

type Props = {
  roomName: string;
  users: User[];
  isLocked: boolean;
  handleJoinToTheRoom: (roomName: string) => void;
};
const Room = (props: Props) => {
  const { roomName, users, isLocked, handleJoinToTheRoom } = props;

  return (
    <Wrapper>
      <RoomName>{roomName}</RoomName>
      <UserSlotsWrapper>
        {users[0] ? <RoomUserInfo isComputer={users[0].isComputer} userName={users[0].name} userStatus={users[0].status} /> : <EmptyRoomInfo />}
        {users[1] ? <RoomUserInfo isComputer={users[1].isComputer} userName={users[1].name} userStatus={users[1].status} /> : <EmptyRoomInfo />}
      </UserSlotsWrapper>

      <StandardButton isActive={users.length < 2 && !isLocked ? true : false} onClick={() => handleJoinToTheRoom(roomName)}>
        Join room
      </StandardButton>
    </Wrapper>
  );
};

export default Room;
