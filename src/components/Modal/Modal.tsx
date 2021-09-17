import React, { MouseEventHandler, ReactNode } from 'react';
import styles from './Modal.module.scss';

interface IModalProps {
  children: ReactNode;
  show: boolean;
  onClick: () => void;
}

export const Modal: React.FC<IModalProps> = ({ children, show, onClick }) => {
  const closeModal: MouseEventHandler = (event) => {
    const elem = event.target as HTMLElement;
    if (elem.classList.contains(styles.modal)) {
      onClick();
    }
  };

  return (
    <div
      className={show ? styles.modal : styles.modal_close}
      onClick={closeModal}
      role="button"
      aria-hidden="true"
    >
      {children}
    </div>
  );
};
