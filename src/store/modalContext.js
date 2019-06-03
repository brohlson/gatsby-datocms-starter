import React from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  open: false,
};

const ModalContext = React.createContext(defaultState);

class ModalProvider extends React.Component {
  state = {
    open: false,
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  close = () => {
    this.setState({ open: false });
  };

  open = () => {
    this.setState({ open: true });
  };

  render() {
    const { children } = this.props;
    const { open } = this.state;
    return (
      <ModalContext.Provider
        value={{
          open,
          closeModal: this.close,
          openModal: this.open,
        }}
      >
        {children}
      </ModalContext.Provider>
    );
  }
}

export default ModalContext;

export { ModalProvider };
