// @flow
import * as React from 'react';
import { createModal } from './createModal';

export const useModal = () => {
  const [isModalOpen, setModalOpenStatus] = React.useState(false);
  const [modalContent, setModalContent] = React.useState(null);

  const closeModal = () => {
    setModalOpenStatus(false);
  };

  const showModal = (content: React.Node) => {
    setModalContent(content);
    setModalOpenStatus(true);
  };

  const Modal = createModal(isModalOpen, closeModal, modalContent);

  return [Modal, showModal];
};
