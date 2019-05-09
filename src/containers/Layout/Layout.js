import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { ThemeProvider } from 'styled-components';
import { SiteWrapper } from './Layout.css';
import Reboot from '../../styles/Reboot';
import Global from '../../styles/Global';
import Theme from '../../styles/Theme';

const Layout = ({ children }) => {
  return (
    <SiteWrapper>
      <Reboot />
      <Global />
      <ThemeProvider theme={Theme}>
        <Fragment>
          <Header />
          {children}
          <Footer />
        </Fragment>
      </ThemeProvider>
    </SiteWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
