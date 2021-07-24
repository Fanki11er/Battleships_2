import { useEffect, useState } from 'react';
import { User } from '../../../Types/types';
import { UserInfo, Wrapper } from './PreparingPageStatusInfo.styles';

type SortedUsers = {
  me: User | undefined;
  opponent: User | undefined;
};

export type Props = {
  users: User[];
  socketId: string;
};
const PreparingPageStatusInfo = (props: Props) => {
  const { users, socketId } = props;
  const [sortedUsers, setSortedUsers] = useState<SortedUsers>({ me: undefined, opponent: undefined });

  useEffect(() => {
    sortUsers(users, socketId);
  }, [users, socketId]);

  const sortUsers = (users: User[], socketId: string | undefined) => {
    const sorted = {
      me: undefined,
      opponent: undefined,
    } as SortedUsers;
    socketId &&
      users.forEach((user) => {
        if (user.id === socketId) {
          sorted.me = user;
        } else {
          sorted.opponent = user;
        }
      });
    setSortedUsers(sorted);
  };

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
