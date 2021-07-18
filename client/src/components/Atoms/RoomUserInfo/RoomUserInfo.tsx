import { UserStatus } from '../../../Types/types';
import { StyledComputerIcon, StyledPersonIcon, StyledUserStatus, UserName, Wrapper } from './RoomUserInfo.styles';

type Props = {
  userName: string;
  userStatus: UserStatus;
  isComputer?: boolean;
};
const RoomUserInfo = (props: Props) => {
  const { userName, userStatus, isComputer } = props;
  return (
    <Wrapper>
      {isComputer ? <StyledComputerIcon /> : <StyledPersonIcon />}
      <UserName>{userName}</UserName>
      <StyledUserStatus userStatus={userStatus} />
    </Wrapper>
  );
};

export default RoomUserInfo;
