import React, { Component } from 'react';
import ModalContext from '../../store/modalContext';
import { ModalWrapper, ModalInner } from './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //eslint-disable-next-line
    console.log('Lifecycle methods?  Fuck yeah.');
  }

  render() {
    return (
      <ModalContext.Consumer>
        {({ closeModal }) => (
          <ModalWrapper onClick={closeModal}>
            <ModalInner>Hello</ModalInner>
          </ModalWrapper>
        )}
      </ModalContext.Consumer>
    );
  }
}

export default Modal;
