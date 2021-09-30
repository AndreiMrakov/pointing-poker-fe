import React, { MouseEventHandler, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Modal.module.scss';

interface IModalProps {
  children: ReactNode;
  show?: boolean;
  onClick?: () => void;
  styleName?: string;
}

export const Modal: React.FC<IModalProps> = ({
  children, show, onClick, styleName,
}) => {
  const closeModal: MouseEventHandler = (event) => {
    const elem = event.target as HTMLElement;
    if (elem.classList.contains(styles.modal) && onClick) {
      onClick();
    }
  };

  return (
    <div
      className={classNames(styleName,
        {
          [styles.modal]: show,
          [styles.modal_close]: !show,
        })}
      onClick={closeModal}
      role="button"
      aria-hidden="true"
    >
      {children}
    </div>
  );
};
