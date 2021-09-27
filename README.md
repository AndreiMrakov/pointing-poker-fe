# pointing-poker-fe

Frontend part for Pointing Poker  
Staging: https://pointing-poker-app.herokuapp.com

socket events:

| Event name    | description          |payload               | 
| ------------- | -------------------- |--------------------|
| 'joinUser'    | join user to room    |                    |
| 'leaveUser'   | leave user from room |                    |
| 'startGame'   | game is started      |                    |
| 'restartGame' | game is restarted    |                    |
| 'finishGame'  | game is finished     |                    |
| 'userVote'    | user voted           |                    |
| 'createGame'  | create new game      |                    |
| 'message:create'| send message to BE | {text: string, roomId: string, userId: string}|
