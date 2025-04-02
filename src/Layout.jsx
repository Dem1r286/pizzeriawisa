import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';

const Layout = () => {
  return (
    <div id='layout-container' className="flex flex-col justify-center items-center min-h-screen">
      <Header />
      <main id='content' className='flex flex-row flex-grow items-center justify-center'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;