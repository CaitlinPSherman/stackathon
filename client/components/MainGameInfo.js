import React from 'react';
import { useSelector } from 'react-redux';

const MainGameInfo = () => {
  const drawings = useSelector((state) => state.game.drawings);

  return (
    <div id="main-game-info-container">
      <h3>Submitted:</h3>
      {drawings && Object.keys(drawings).length > 0 ? (
        Object.keys(drawings).map((player, index) => (
          <h3 key={index}>{player}</h3>
        ))
      ) : (
        <h3></h3>
      )}
    </div>
  );
};

export default MainGameInfo;
