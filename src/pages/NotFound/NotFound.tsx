import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NotFound.module.scss';
import { navMap } from '@/untils/NavMap';

export const NotFound = () => (
  <div className={styles.wrapper}>
    <div className={styles.img} />
    <p className={styles.title}>Page not found</p>
    <NavLink className={styles.link} to={navMap.home()}>
      Go back
    </NavLink>
  </div>
);
