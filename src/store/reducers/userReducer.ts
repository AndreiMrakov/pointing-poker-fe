import { createReducer } from '@reduxjs/toolkit';
import {
  addGameSettings, addUserId, addUserName, addUserRoom,
} from '@/store/actions/userActions';

const initialStateUser = {
  user: {
    id: '',
    name: '',
    room: '',
  },
};

const initialStateGame = {
  gameSettings: {
    gameName: '',
    voteSystem: '',
    dealerRights: '',
  },
};

export const userReducer = createReducer(initialStateUser, (builder) => {
  builder
    .addCase(addUserId, (state, action) => {
      state.user.id = action.payload;
    })
    .addCase(addUserName, (state, action) => {
      state.user.name = action.payload;
    })
    .addCase(addUserRoom, (state, action) => {
      state.user.room = action.payload;
    })
    .addDefaultCase((state) => state);
});

export const gameReducer = createReducer(initialStateGame, (builder) => {
  builder
    .addCase(addGameSettings, (state, action) => {
      state.gameSettings = action.payload;
    })
    .addDefaultCase((state) => state);
});
