import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlayer, _addLocalPlayer, _getRoomCode } from '../store/game';
import PlayerWait from './PlayerWait';

const PlayerJoin = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [playerCode, setPlayerCode] = useState('');
  const [joined, setJoined] = useState(false);

  return (
    <>
      {!joined ? (
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
              dispatch(_getRoomCode(playerCode));
              setJoined(true);
            }}
          >
            JOIN
          </button>
        </div>
      ) : (
        <PlayerWait />
      )}
    </>
  );
};

export default PlayerJoin;
