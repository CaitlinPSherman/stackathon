import axios from 'axios';

const GET_ROOM_CODE = 'GET_ROOM_CODE';
const GET_PICTURES = 'GET_PICTURES';
const ADD_PLAYER = 'ADD_PLAYER';

export const _getRoomCode = (code) => ({
  type: GET_ROOM_CODE,
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

export const getRoomCode = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/game/code`);
      dispatch(_getRoomCode(data));
    } catch (err) {
      console.err('😭 unable to get room code', err);
    }
  };
}

export const getPictures = (code) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/pictures/${code}`);

      dispatch(_getPictures(data));
    } catch (err) {
      console.err('😭 unable to get pics', err);
    }
  };
};

export const addPlayer = (name, code) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/game/${code}`, name);

      dispatch(_addPlayer(data));
    } catch (err) {
      console.err('😭 unable to get pics', err);
    }
  };
}

const initialstate = {
  players: [],
  pictures: [],
  code: '',
};

export default function gameReducer(state = initialstate, action) {
  switch (action.type) {
    case GET_PICTURES:
      return {
        ...state,
        pictures: action.pics,
      };
    case GET_ROOM_CODE:
      return {
        ...state,
        code: action.code,
      };
    default:
      return state;
  }
}
