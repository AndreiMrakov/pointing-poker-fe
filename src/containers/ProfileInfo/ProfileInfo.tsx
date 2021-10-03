import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { userSelectors } from '@/store/selectors';
import styles from './ProfileInfo.module.scss';
import { history } from '@/utils/history';
import { navMap } from '@/utils/NavMap';
import { useAppDispatch } from '@/store';
import {
  membersActions, messageActions, roomStateActions, taskActions, userActions,
} from '@/store/actions';

export const ProfileInfo: React.FC = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const name = useSelector(userSelectors.name);
  const role = useSelector(userSelectors.role);
  const dispatch = useAppDispatch();

  const profileBtnHandler = () => {
    setIsModalOpened(!isModalOpened);
  };

  const signOutHandler = () => {
    localStorage.removeItem('userId');
    history.push(navMap.home());
    dispatch(userActions.signOut());
    dispatch(roomStateActions.signOut());
    dispatch(taskActions.signOut());
    dispatch(messageActions.signOut());
    dispatch(membersActions.signOut());
  };

  return (
    <section className={styles.profileWrapper}>
      <button
        className={styles.profileBtn}
        onClick={profileBtnHandler}
      >
        <div className={styles.avatar} />
        <h3 className={styles.name}>
          {name}
        </h3>
        <div className={styles.dropdownArrow} />
      </button>
      {isModalOpened
      && (
        <div className={styles.profileModal}>
          <div className={styles.mainInfo}>
            <div className={styles.avatar} />
            <div className={styles.nameRoleWrapper}>
              <h4>
                {name}
              </h4>
              <p className={styles.role}>
                {role || 'Member'}
              </p>
            </div>
          </div>
          <div
            className={styles.leaveWrapper}
            onClick={signOutHandler}
            role="button"
            aria-hidden
          >
            <p>Sign out</p>
            <div className={styles.leaveImg} />
          </div>
        </div>
      )}
    </section>
  );
};
