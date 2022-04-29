import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Join = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [playerCode, setPlayerCode] = useState('');

  return (
    <div id="join-container">
      <label>Room Code:</label>
      <input></input>
      <label>Name:</label>
      <input></input>
      <button>JOIN</button>
    </div>
  );
};

export default Join;
