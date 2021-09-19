import { createReducer } from '@reduxjs/toolkit';
import {
  addGameSettings, addUserId, addUserName, addUserRoom,
} from '@/store/actions/userActions';

const initialStateUser = {
  id: '',
  name: '',
  room: '',
};

const initialStateGame = {
  gameName: '',
  voteSystem: '',
  dealerRights: '',
};

export const userReducer = createReducer(initialStateUser, (builder) => {
  builder
    .addCase(addUserId, (state, action) => {
      state.id = action.payload;
    })
    .addCase(addUserName, (state, action) => {
      state.name = action.payload;
    })
    .addCase(addUserRoom, (state, action) => {
      state.room = action.payload;
    })
    .addDefaultCase((state) => state);
});

export const gameReducer = createReducer(initialStateGame, (builder) => {
  builder
    .addCase(addGameSettings, (state, action) => {
      state.gameName = action.payload.gameName;
      state.voteSystem = action.payload.voteSystem;
      state.dealerRights = action.payload.dealerRights;
    })
    .addDefaultCase((state) => state);
});
