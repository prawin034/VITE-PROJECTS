import React from 'react';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
const RootPage = () => {
  return (
    <>
      <Navbar />
      {/* <SideBar /> */}

      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default RootPage;
