import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const PlayerWait = () => {
  const player = useSelector((state) => state.game.localPlayer);

  return (
    <div>
      {player ? (
        <p>
          Hi {player}, hit the START button on the main screen once everyone has
          joined!
        </p>
      ) : (
        <p>hit the START button on the main screen once everyone has joined!</p>
      )}
    </div>
  );
};

export default PlayerWait;
