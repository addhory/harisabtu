import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';

const Modal = () => {
  const container = document.getElementById('modal-portal');
  return ReactDOM.createPortal(
    <div className={styles.modal}>This is a Modal</div>,
    container
  );
};

export const AnotherModal = () => {
  const container = document.getElementById('modal-portal');
  return <div className={styles.modal2}>This is a Modal number 2</div>;
};

export default Modal;
