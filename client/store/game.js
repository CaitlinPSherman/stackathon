import axios from 'axios';
import { stat } from 'fs';
import { initial } from 'lodash';

const GET_GAME_CODE = 'GET_GAME_CODE';
const GET_PICTURES = 'GET_PICTURES';
const ADD_PLAYER = 'ADD_PLAYER';

export const _getGameCode = (code) => ({
  type: GET_GAME_CODE,
  code,
});

const _getPictures = (pics) => ({
  type: GET_PICTURES,
  pics,
});

export const _addPlayer = (name) => ({
  type: ADD_PLAYER,
  name,
});

export const getPictures = (code) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`api/pictures/${code}`);
      dispatch(_getPictures(data));
    } catch (err) {
      console.err('😭 unable to get pics', err);
    }
  };
};

const initialstate = {
  players: [],
  pictures: [],
  code: 0,
};

export default function gameReducer(state = initialstate, action) {
  switch (action.type) {
    case GET_PICTURES:
      return {
        ...state,
        pictures: action.pics,
      };
    case GET_GAME_CODE:
      return {
        ...state,
        code: action.code,
      };
    default:
      return state;
  }
}
