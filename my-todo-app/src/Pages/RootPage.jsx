import React from 'react';
import { Outlet } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import Navbar from '../components/Navbar';
import Alert from '../components/Alert';
const RootPage = () => {
  const { alert } = useGlobalContext();

  return (
    <>
      {alert.show && <Alert {...alert} />}
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
