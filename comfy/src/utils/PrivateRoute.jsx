import { redirect } from 'react-router-dom';
import { useUserGlobalContext } from '../context/UserContext';

export const isAuthenticated = () => {
  const { myUser } = useUserGlobalContext();

  return myUser;
};
