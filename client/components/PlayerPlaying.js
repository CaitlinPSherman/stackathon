import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ColorGrid from './ColorGrid';
import PlayerWait from './PlayerWait';
import { submitDrawing } from '../store/game';

const PlayerPlaying = () => {
  const dispatch = useDispatch();
  const [localStage, setLocalStage] = useState('drawing');
  const player = useSelector(state => state.game.players)
  const code = useSelector(state => state.game.code)
  const drawing = ':)'

  return (
    <div>
      {localStage === 'drawing' ? (
        <>
          <h3>picture coords here</h3>
          <ColorGrid />
          <button
            type="submit"
            onClick={() => {
              setLocalStage('waiting');
              dispatch(submitDrawing(drawing, player, ));
            }}
          >
            Submit
          </button>
        </>
      ) : (
        <PlayerWait />
      )}
    </div>
  );
};

export default PlayerPlaying;
