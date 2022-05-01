import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlayer, _addLocalPlayer, _getRoomCode } from '../store/game';
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
      <button
        type="submit"
        onClick={() => {
          dispatch(addPlayer(name, playerCode));
          dispatch(_addLocalPlayer(name));
          dispatch(_getRoomCode(playerCode))
        }}
      >
        JOIN
      </button>
    </div>
  );
};

export default PlayerJoin;
