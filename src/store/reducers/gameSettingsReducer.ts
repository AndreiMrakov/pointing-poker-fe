import { createReducer } from '@reduxjs/toolkit';
import { addGameSettings } from '../actions/userActions';

const initialStateGame = {
  gameName: '',
  voteSystem: '',
  dealerRights: '',
};

export const gameSettings = createReducer(initialStateGame, (builder) => {
  builder
    .addCase(addGameSettings, (state, action) => {
      state.gameName = action.payload.gameName;
      state.voteSystem = action.payload.voteSystem || '';
      state.dealerRights = action.payload.dealerRights || '';
    })
    .addDefaultCase((state) => state);
});
