export enum SocketEvent {
  JoinUser = 'joinUser',
  LeaveUser = 'leaveUser',
  StartGame = 'startGame',
  RestartGame = 'restartGame',
  FinishGame = 'finishGame',
  UserVote = 'userVote',
  CreateGame = 'createGame',
  MessageCreate = 'message:create',
  TaskCreate = 'task_create',
  TaskDelete = 'task_delete',
  TaskUpdateScore = 'task_set_score',
  TaskUpdateActive = 'task_set_active'
}
