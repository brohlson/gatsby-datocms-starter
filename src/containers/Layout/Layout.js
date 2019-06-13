import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ThemeProvider } from 'styled-components';
import { SiteWrapper } from './Layout.css';
import Reboot from '../../styles/Reboot';
import Global from '../../styles/Global';
import Theme from '../../styles/Theme';
import ModalContext from '../../store/modalContext';
import Modal from '../../components/Modal';

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
          {/* Optional: The modal is rendered like this in order to utlize componentDidMount */}
          <ModalContext.Consumer>
            {({ open }) => {
              return <Modal open={open} />;
            }}
          </ModalContext.Consumer>
        </Fragment>
      </ThemeProvider>
    </SiteWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
