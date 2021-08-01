import { SortedUsers } from '../../../Types/types';
import { UserInfo, Wrapper } from './PreparingPageStatusInfo.styles';

export type Props = {
  sortedUsers: SortedUsers;
};
const PreparingPageStatusInfo = (props: Props) => {
  const { sortedUsers } = props;

  return (
    <Wrapper>
      <UserInfo status={sortedUsers.me?.status} data-testid={'user-status'}>{`Your status: ${
        sortedUsers.me !== undefined ? sortedUsers.me.status.toUpperCase() : ''
      }`}</UserInfo>
      <UserInfo status={sortedUsers.opponent?.status} data-testid={'user-status'}>
        {`Opponent status: ${sortedUsers.opponent !== undefined ? sortedUsers.opponent.status.toUpperCase() : 'No opponent'}`}
      </UserInfo>
    </Wrapper>
  );
};

export default PreparingPageStatusInfo;
