import { redirect } from 'react-router-dom';
import { useUserGlobalContext } from '../context/UserContext';
const FormatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
};

export default FormatPrice;

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  if (type === 'colors') {
    unique = unique.flat();
  }

  return ['all', ...new Set(unique)];
};

export const checkAuthLogin = () => {
  const token = localStorage.getItem(
    '@@auth0spajs@@::bmqJfyn7qnLXBbaTzbX1oq2j3S0eNwJy::@@user@@'
  );
  if (!token) {
    return redirect('/auth');
  }
};
