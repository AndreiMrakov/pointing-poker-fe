import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import styles from './CardNest.module.scss';
import { roomStateSelectors } from '@/store/selectors';
import { StateRoomTitle } from '@/utils/enums';

interface ICardNestProps {
  score?: string;
  className?: string;
  userRole?: string;
  name?: string;
}

export const CardNest: React.FC<ICardNestProps> = ({
  score,
  className,
  userRole = 'member',
  name,
}) => {
  const roomState = useSelector(roomStateSelectors.roomState);
  return (
    <>
      <section
        className={classNames(
          styles.cardNest,
          className,
          {
            [styles.spectator]: userRole === 'spectator',
            [styles.showCard]: roomState === StateRoomTitle.showCards && score,
          },
        )}
      >
        <div className={styles.frontSide}>
          {score}
        </div>
        <div
          className={classNames(
            styles.backSide,
            { [styles.chosenCardBackground]: score },
          )}
        />
      </section>
      {name && (
        <h2 className={styles.name}>
          {name}
        </h2>
      )}
    </>
  );
};
