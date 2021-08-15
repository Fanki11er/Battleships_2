import React, { ReactNode, useCallback, useState } from 'react';
import { createContext } from 'react';

export const UserContext = createContext({
  userName: '' as string,
  roomName: '' as string,
  handleSetUserName: (userName: string) => {},
  handleSetRoomName: (roomName: string) => {},
});

type Props = {
  default?: string;
};

const UserProvider = (props: React.PropsWithChildren<ReactNode> & Props) => {
  const { children } = props;
  const [userName, setUserName] = useState(props.default || '');
  const [roomName, setRoomName] = useState('');

  const handleSetUserName = useCallback((userName: string) => {
    setUserName(userName);
  }, []);

  const handleSetRoomName = useCallback((roomName: string) => {
    setRoomName(roomName);
  }, []);

  const userContext = {
    userName,
    roomName,
    handleSetUserName,
    handleSetRoomName,
  };

  return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>;
};

export default UserProvider;
