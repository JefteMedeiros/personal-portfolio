import React, { createContext, useState } from 'react';

interface ContextProps {
  clickedUser: number;
  handleSetClickedUser: (user: number) => void;
}

interface ChildrenProps {
  children: React.ReactNode;
}

export const ClickedUser = createContext({} as ContextProps);

export const ClickedUserProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [clickedUser, setClickedUser] = useState(0);

  const handleSetClickedUser = (user: number) => {
    setClickedUser(state => user);
    console.log(user);
  };

  return <ClickedUser.Provider value={{ clickedUser, handleSetClickedUser }}>{children}</ClickedUser.Provider>;
};
