import React, { useMemo } from 'react';
import ModalContext from '../../store/modalContext';
import { ModalWrapper, ModalInner } from './Modal.css';
import PropTypes from 'prop-types';

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
