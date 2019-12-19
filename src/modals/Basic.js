import React, { useContext } from 'react';

import ModalContext from '../store/modalContext';
import { ModalInner, ModalWrapper } from '../components/Elements';

export default function Basic() {
  const { closeModal } = useContext(ModalContext);
  return (
    <ModalWrapper onClick={closeModal}>
      <ModalInner>hey</ModalInner>
    </ModalWrapper>
  );
}
