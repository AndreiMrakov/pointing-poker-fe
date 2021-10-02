# pointing-poker-fe

Frontend part for Pointing Poker  
Staging: https://pointing-poker-app.herokuapp.com

socket events:

| Event name        | description                                                | payload                                        |
| ----------------- | ---------------------------------------------------------- | ---------------------------------------------- |
| 'joinUser'        | join user to room                                          |                                                |
| 'leaveUser'       | leave user from room                                       |                                                |
| 'startGame'       | game is started                                            |                                                |
| 'restartGame'     | game is restarted                                          |                                                |
| 'finishGame'      | game is finished                                           |                                                |
| 'userVote'        | user voted                                                 |                                                |
| 'createGame'      | create new game                                            |                                                |
| 'message:create'  | send message to BE                                         | {text: string, roomId: string, userId: string} |
| 'task_create'     | request from FE to create task to room                     |
| 'task_delete'     | request from FE to delete task to all users                |
| 'task_set_score'  | request from FE to update score task to all room users     |
| 'task_set_active' | request from FE to update is_active task to all room users |
