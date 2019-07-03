import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Fade from 'react-reveal/Fade';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Reboot from '../style/reboot';
import Global from '../style/global';
import ModalContext from '../store/modalContext';
import Modal from '../components/Modal';
import { colors, duration } from '../consts/style';

const SiteWrapper = styled.div`
  background: ${colors.light};
`;

const Layout = ({ children }) => {
  return (
    <SiteWrapper>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://rsms.me/inter/inter.css"
        />
      </Helmet>
      <Reboot />
      <Global />
      <Fade down duration={duration}>
        <Header />
      </Fade>
      {children}
      <Fade up duration={duration}>
        <Footer />
      </Fade>

      <ModalContext.Consumer>
        {({ open }) => {
          return <Modal open={open} />;
        }}
      </ModalContext.Consumer>
    </SiteWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
