import { createReducer } from '@reduxjs/toolkit';
import {
  addGameSettings, addUserId, addUserName, addUserRoom,
} from '../actions/userActions';

const initialState = {
  user: {
    id: '',
    name: '',
    room: '',
  },
  gameSettings: {
    gameName: '',
    voteSystem: '',
    dealerRights: '',
  },
};

export const userReducer = createReducer(initialState, (builder) => {
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
    .addCase(addGameSettings, (state, action) => {
      state.gameSettings = action.payload;
    })
    .addDefaultCase((state) => state);
});
