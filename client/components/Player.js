import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlayerJoin from './PlayerJoin';
import PlayerWait from './PlayerWait';
import PlayerPlaying from './PlayerPlaying';

const Player = () => {
  const stage = useSelector((state) => state.game.stage);
  console.log('player')

  return (
    <div id="main-game-container">
      {stage === 'beginning' ? (
        <PlayerJoin />
      ) : stage === 'drawing' ? (
        <PlayerPlaying />
      ) : (
        <PlayerWait />
      )}
    </div>
  );
};

export default Player;
