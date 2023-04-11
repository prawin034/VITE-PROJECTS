import React, { useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, isLoading, user } =
    useAuth0();

  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    // console.log(`user:${user}`);
    // console.log(`isauthenticated:${isAuthenticated}`);
    // console.log(`isloading:${isLoading}`);

    if (isAuthenticated) {
      setMyUser(user);
    } else {
      setMyUser(false);
    }
  }, [isAuthenticated]);

  return (
    <UserContext.Provider
      value={{
        loginWithRedirect,
        logout,
        myUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserGlobalContext = () => {
  return useContext(UserContext);
};
