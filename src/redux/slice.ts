import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'toolkit',
  initialState: {
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
  },
  reducers: {
    addUserId(state, action) {
      state.user.id = action.payload;
    },
    addUserName(state, action) {
      state.user.name = action.payload;
    },
    addUserRoom(state, action) {
      state.user.room = action.payload;
    },
    addGameSettings(state, action) {
      state.gameSettings.gameName = action.payload.gameName;
      state.gameSettings.voteSystem = action.payload.voteSystem;
      state.gameSettings.dealerRights = action.payload.dealerRights;
    },
  },
});

export const {
  addUserId, addUserName, addUserRoom, addGameSettings,
} = slice.actions;
