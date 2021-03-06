import axios from 'axios';
import socket from '../socket';
const GET_ROOM_CODE = 'GET_ROOM_CODE';
const GET_PICTURES = 'GET_PICTURES';
const ADD_PLAYER = 'ADD_PLAYER';
const ADD_LOCAL_PLAYER = 'ADD_LOCAL_PLAYER';
const GOT_MESSAGE_FROM_SERVER = 'GOT_MESSAGE_FROM_SERVER';
const CHANGE_GAME_STAGE = 'CHANGE_GAME_STAGE';
const GET_PICTURE_ASSIGNMENTS = 'GET_PICTURE_ASSIGNMENTS';
const SUBMIT_DRAWING = 'SUBMIT_DRAWING';

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

export const _addLocalPlayer = (name) => ({
  type: ADD_LOCAL_PLAYER,
  name,
});

export const _gotMessageFromServer = (message) => {
  return {
    type: GOT_MESSAGE_FROM_SERVER,
    message,
  };
};

export const _changeGameStage = (stage) => {
  return {
    type: CHANGE_GAME_STAGE,
    stage,
  };
};

export const _submitDrawing = ({ player, drawing }) => {
  return {
    type: SUBMIT_DRAWING,
    player,
    drawing,
  };
};

export const _getPictureAssignments = (picAssignments) => {
  return {
    type: GET_PICTURE_ASSIGNMENTS,
    picAssignments,
  };
};

export const getRoomCode = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/game/code`);
      dispatch(_getRoomCode(data));
    } catch (err) {
      console.log('😭 unable to get room code', err);
    }
  };
};

export const getPictures = (code) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/pictures/${code}`);
      dispatch(_getPictures(data));
    } catch (err) {
      console.log('😭 unable to get pics', err);
    }
  };
};

export const addPlayer = (name, code) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/game/${code}/player`, { name });
      dispatch(_addPlayer(data));
      socket.emit('new-player', data);
    } catch (err) {
      console.log('😭 unable to add player', err);
    }
  };
};

export const changeGameStage = (stage, code) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/game/${code}/stage`, { stage });
      socket.emit('change-stage', data);
      dispatch(_changeGameStage(data));
    } catch (err) {
      console.log('😭 unable to change game stage', err);
    }
  };
};

export const getPictureAssignments = (code) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/game/${code}/assignments`);
      dispatch(_getPictureAssignments(data));
    } catch (err) {
      console.log('😭 unable to get picture assignments', err);
    }
  };
};

export const submitDrawing = (drawing, player, code) => {
  return async (dispatch) => {
    try {
      console.log('player from thunk:', player);
      const { data } = await axios.post(`/api/game/${code}/drawing`, {
        drawing,
        player,
      });
      dispatch(_submitDrawing(data));
      socket.emit('submit-drawing', data);
    } catch (err) {
      console.log('😭 unable to submit drawing', err);
    }
  };
};

const initialstate = {
  players: [],
  localPlayer: '',
  pictures: [],
  code: '',
  stage: 'beginning',
  round: 0,
  pictureAssignments: {},
  drawings: {},
  score: {},
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
    case ADD_PLAYER:
      const newPlayers = [...state.players, action.name];
      return {
        ...state,
        players: newPlayers,
      };
    case ADD_LOCAL_PLAYER:
      return {
        ...state,
        localPlayer: action.name,
      };
    case CHANGE_GAME_STAGE:
      return {
        ...state,
        stage: action.stage,
      };
    case GET_PICTURE_ASSIGNMENTS:
      return {
        ...state,
        pictureAssignments: action.picAssignments,
      };
    case SUBMIT_DRAWING:
      const newDrawings = { ...state.drawings };
      newDrawings[action.player] = action.drawing;
      return {
        ...state,
        drawings: newDrawings,
      };
    default:
      return state;
  }
}
