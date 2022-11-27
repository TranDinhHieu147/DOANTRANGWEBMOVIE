import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { Events } from '../pages';



const HomeLayout = () => {
  return (
    <>
      <Header />     
      <Outlet />
      <Events/>
      <Footer />
    </>
  );
};

export default HomeLayout;
