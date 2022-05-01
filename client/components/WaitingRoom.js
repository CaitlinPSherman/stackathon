import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRoomCode } from '../store/game';

const WaitingRoom = () => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.game.players);

  useEffect(() => {
    dispatch(getRoomCode());
  }, []);

  console.log('players from inside WR comp', players);

  return (
    <div id="waitingRoom-container">
      <h2>Welcome to Pictures Drawn Poorly!</h2>
      <h3>
        To get started, go to [url] on your phone and sign in with the room code
      </h3>
      <h3>Players:</h3>
      <ul>
        {players && players.length > 0 ? (
          players.map((player) => (<li>{player}</li>))
        ) : (
          <li>No players yet</li>
        )}
      </ul>
      <Link to="/game">
        <button type="button">START</button>
      </Link>
    </div>
  );
};

export default WaitingRoom;
