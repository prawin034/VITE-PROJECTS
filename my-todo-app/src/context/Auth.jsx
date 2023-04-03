import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithRedirect, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user] = useAuthState(auth);
  const [loading, setloading] = useState(false);

  console.log(user);

  const googleSignIN = () => {
    const provider = new GoogleAuthProvider();

    signInWithRedirect(auth, provider);
  };

  const logout = () => {
    signOut(auth);
  };

  return (
    <AppContext.Provider
      value={{
        googleSignIN,
        logout,
        loading,
        user,
        setloading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalAuthContext = () => {
  return useContext(AppContext);
};

export { AuthProvider };
