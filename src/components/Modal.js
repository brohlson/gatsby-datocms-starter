import React, { useMemo } from 'react';
import ModalContext from '../store/modalContext';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 20px;
`;

export const ModalInner = styled.div`
  background: white;
  z-index: 3000;
  position: relative;
  max-width: 100%;
  max-height: 100%;
`;

const Modal = ({ open }) => {
  const handleLifeCycle = () => {
    //eslint-disable-next-line
    console.log('Lifecycle methods?  Fuck yeah.');
  };
  // Each time open prop changes, run handleLifeCycle()
  useMemo(handleLifeCycle, [open]);

  return (
    <ModalContext.Consumer>
      {({ closeModal }) =>
        open ? (
          <ModalWrapper onClick={closeModal}>
            <ModalInner>Hello</ModalInner>
          </ModalWrapper>
        ) : null
      }
    </ModalContext.Consumer>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Modal;
