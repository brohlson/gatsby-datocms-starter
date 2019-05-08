import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { SiteWrapper } from './Layout.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <SiteWrapper>
      <Header />
      <Fragment>{children}</Fragment>
      <Footer />
    </SiteWrapper>
  );
};

export default Layout;
