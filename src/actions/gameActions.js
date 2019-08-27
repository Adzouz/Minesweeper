import { UPDATE_MATRIX, UPDATE_GAME_STATUS } from './types';

export const updateMatrix = (content) => ({
  type: UPDATE_MATRIX,
  payload: content
});

export const updateGameStatus = (status) => ({
  type: UPDATE_GAME_STATUS,
  payload: status
});
