import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postMessage } from '../store/game';

const Join = () => {
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
      <button type="submit" onClick={dispatch(postMessage({name, playerCode}))}>
        JOIN
      </button>
    </div>
  );
};

export default Join;
