import React from 'react';
import Footer from '../home/Footer';

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
