import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pictures from './Pictures';
import MainGameInfo from './MainGameInfo';

const MainGame = () => {
  return (
    <div id="main-game-container">
      <MainGameInfo />
      <Pictures />
    </div>
  );
};

export default MainGame;
