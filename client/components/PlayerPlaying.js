import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ColorGrid from './ColorGrid';

const PlayerPlaying = () => {
  const picture = useSelector((state) => state.game.pictures[0]);

  return (
    <div>
      <ColorGrid />
      {picture ? <img src={picture.url} /> : <div></div>}
      <button type="submit">Submit</button>
    </div>
  );
};

export default PlayerPlaying;
