import React, { ReactNode, useState } from 'react';
import { createContext } from 'react';

export const UserContext = createContext({
  userName: '' as string,
  handleSetUserName: (userName: string) => {},
});

const UserProvider = (props: React.PropsWithChildren<ReactNode>) => {
  const { children } = props;
  const [userName, setUserName] = useState('');

  console.log(userName, 'NAme');

  const handleSetUserName = (userName: string) => {
    setUserName(userName);
  };

  const userContext = {
    userName,
    handleSetUserName,
  };

  return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>;
};

export default UserProvider;
