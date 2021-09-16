import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NotFound.module.scss';
import { navMap } from '@/untils/NavMap';

export const NotFound = () => (
  <div className={classes.wrapper}>
    <div className={classes.img} />
    <p className={classes.title}>Page not found</p>
    <NavLink className={classes.link} to={navMap.home()}>
      Go back
    </NavLink>
  </div>
);
