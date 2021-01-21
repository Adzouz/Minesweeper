import { UPDATE_MATRIX, UPDATE_GAME_STATUS } from '../actions/types';

const initialState = {
  matrix: [],
  gameOver: false
};

const gameReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_MATRIX:
      return {
        ...state,
        matrix: action.payload
      };
    case UPDATE_GAME_STATUS:
      return {
        ...state,
        gameOver: action.payload
      };
    default:
      return state;
  }
}

export default gameReducer;
