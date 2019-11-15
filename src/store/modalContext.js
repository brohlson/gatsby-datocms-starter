import React, { useState } from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  open: false,
};

const ModalContext = React.createContext(defaultState);

const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(defaultState.open);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  return (
    <ModalContext.Provider
      value={{
        open,
        closeModal,
        openModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalContext;

export { ModalProvider };
