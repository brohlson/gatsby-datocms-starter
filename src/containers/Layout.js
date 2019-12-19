import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Reboot from '../style/reboot';
import Global from '../style/global';
import ModalContext from '../store/modalContext';
import Modals from '../modals';
import { colors } from '../consts/style';

const SiteWrapper = styled.div`
  background: ${colors.light};
`;

const Layout = ({ children }) => {
  const { open } = useContext(ModalContext);

  function renderModal() {
    if (!open) return null;
    const ModalComponent = Modals[open];
    return <ModalComponent />;
  }
  return (
    <SiteWrapper>
      <Reboot />
      <Global />
      <Header />
      {children}
      {renderModal()}
      <Footer />
    </SiteWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
};

export default Layout;
