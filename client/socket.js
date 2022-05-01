import io from 'socket.io-client';
import { addPlayer, _addPlayer, _changeGameStage } from './store/game';
import store from './store';

const socket = io(window.location.origin);

socket.on('connect', () => {
  console.log('I am now connected to the server!');

  // socket.on('new-player', (player) => {
  //   addPlayer(player);
  // });
});

socket.on('new-player', (player) => {
  store.dispatch(_addPlayer(player));
});

socket.on('change-stage', (stage) => {
  store.dispatch(_changeGameStage(stage));
});

export default socket;
