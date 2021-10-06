import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './InviteBtn.module.scss';

export const InviteBtn: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const url = window.location.href;

  const btnHandler = () => {
    setIsVisible(true);
    setTimeout(() => { setIsVisible(false); }, 1000);
  };

  return (
    <section className={styles.inviteIconWrapper}>
      <CopyToClipboard text={url}>
        <button
          className={styles.inviteIconBtn}
          title="Copy link to invite players"
          onClick={btnHandler}
          disabled={isVisible}
        >
          <div className={styles.inviteIcon} />
        </button>
      </CopyToClipboard>
      {isVisible
      && (
        <div className={styles.tooltip}>
          Link copied
        </div>
      )}
    </section>
  );
};
