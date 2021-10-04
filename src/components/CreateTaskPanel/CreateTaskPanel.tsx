import classNames from 'classnames';
import React, { ChangeEventHandler, useState } from 'react';
import { useSelector } from 'react-redux';
import { roomStateSelectors } from '@/store/selectors';
import { PrimaryButton, SecondaryButton } from '..';
import styles from './CreateTaskPanel.module.scss';
import { socketService } from '@/services';
import { SocketEvent } from '@/utils/enums';
import { SendTaskModel } from '@/models/SendTaskModel';

export const CreateTaskPanel: React.FC = () => {
  const [isTaskEditorOpen, setIsTaskEditorOpen] = useState(false);
  const [title, setTaskTitle] = useState('');
  const roomId = useSelector(roomStateSelectors.roomId);

  const textareaHandler: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setTaskTitle(event.target.value);
  };

  const taskEditorHandler = () => {
    setIsTaskEditorOpen(!isTaskEditorOpen);
  };

  const createTask = () => {
    if (title !== '') {
      const task = new SendTaskModel({
        title,
        roomId,
      });

      socketService.emit(SocketEvent.TaskCreate, task);
      taskEditorHandler();
    }
  };

  return (
    <div className={styles.createTaskPanel}>
      <PrimaryButton
        className={classNames(
          styles.taskEditor__btn, {
            [styles.taskEditor__btn_close]: isTaskEditorOpen === true,
          },
        )}
        onClick={taskEditorHandler}
      >
        + Add an issue
      </PrimaryButton>

      <div className={classNames(
        styles.taskEditor, {
          [styles.taskEditor__open]: isTaskEditorOpen === true,
        },
      )}
      >
        <textarea
          className={styles.textarea}
          onChange={textareaHandler}
          name="taskTitle"
          placeholder="Enter a title for your issue"
        />
        <div className={styles.taskEditor__btns}>
          <SecondaryButton
            className={styles.cancel__btn}
            onClick={taskEditorHandler}
          >
            Cancel
          </SecondaryButton>
          <PrimaryButton
            className={styles.save__btn}
            onClick={createTask}
          >
            Save
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};
