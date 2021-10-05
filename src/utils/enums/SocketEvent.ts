export enum SocketEvent {
  UserVote = 'user_vote',
  TaskCreate = 'task_create',
  TaskDelete = 'task_delete',
  TaskUpdateScore = 'task_set_score',
  TaskUpdateActive = 'task_set_active',
  TaskAvgScore = 'task_avg_score',
  RoomShow = 'room_show',
  RoomFinish = 'room_finish',
  RoomStart = 'room_start',
  RoomCreate = 'room_create',
  RoomJoin = 'room_join',
  RoomLeave = 'room_leave',
  MessageCreate = 'message_create',
  ErrorNotData = 'error_not_data',
}
