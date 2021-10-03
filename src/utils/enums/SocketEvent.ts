export enum SocketEvent {
  JoinUser = 'join_user',
  LeaveUser = 'leave_user',
  StartGame = 'start_game',
  RestartGame = 'restart_game',
  FinishGame = 'finish_game',
  UserVote = 'user_vote',
  CreateGame = 'create_game',
  MessageCreate = 'message_create',
  TaskCreate = 'task_create',
  TaskDelete = 'task_delete',
  TaskUpdateScore = 'task_set_score',
  TaskUpdateActive = 'task_set_active'
}
