import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Reboot from '../style/reboot';
import Global from '../style/global';
import ModalContext from '../store/modalContext';
import Modal from '../components/Modal';
import { colors } from '../consts/style';

const SiteWrapper = styled.div`
  background: ${colors.light};
`;

const Layout = ({ children }) => {
  const { open } = useContext(ModalContext);
  return (
    <SiteWrapper>
      <Reboot />
      <Global />
      <Header />
      {children}
      <Footer />
      {open && <Modal />}
    </SiteWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
};

export default Layout;
