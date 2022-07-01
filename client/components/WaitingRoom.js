import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeGameStage, getRoomCode } from '../store/game';

const WaitingRoom = () => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.game.players);
  const code = useSelector((state) => state.game.code)

  useEffect(() => {
    dispatch(getRoomCode());
  }, []);

  return (
    <div id="waitingRoom-container">
      <h2>Welcome to Pictures Drawn Poorly!</h2>
      <h3>
        To get started, go to pictures-drawn-poorly.herokuapp.com on your phone and tap "Player" to sign in with the room code above.
      </h3>
      <h3>Players:</h3>
      <ul>
        {players && players.length > 0 ? (
          players.map((player, index) => (<li key={index}>{player}</li>))
        ) : (
          <li>No players yet</li>
        )}
      </ul>
      <Link to="/game">
        <button type="button" onClick={() => dispatch(changeGameStage('drawing', code))}>START</button>
      </Link>
    </div>
  );
};

export default WaitingRoom;
