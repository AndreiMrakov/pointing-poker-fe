import React from 'react';
import { useSelector } from 'react-redux';
import { userSelectors } from '@/store/selectors';
import styles from './ProfileInfo.module.scss';

export const ProfileInfo: React.FC = () => {
  const name = useSelector(userSelectors.name);
  const role = useSelector(userSelectors.role);

  return (
    <button className={styles.profileWrapper}>
      <div className={styles.avatar} />
      <h3 className={styles.name}>
        {name}
      </h3>
      <div className={styles.dropdownArrow} />
    </button>
  );
};
