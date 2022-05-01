import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlayer } from '../store/game';
import { Link } from 'react-router-dom';

const PlayerJoin = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [playerCode, setPlayerCode] = useState('');
  return (
    <div id="join-container">
      <label>Room Code:</label>
      <input
        value={playerCode}
        onChange={(e) => setPlayerCode(e.target.value)}
      />
      <label>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <Link to="/waiting">
        <button
          type="submit"
          onClick={() => dispatch(addPlayer(name, playerCode))}
        >
          JOIN
        </button>
      </Link>
    </div>
  );
};

export default PlayerJoin;
