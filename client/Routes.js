import React from 'react';
import { Route } from 'react-router-dom';
import WaitingRoom from './components/WaitingRoom';
import Player from './components/Player';
import MainGame from './components/MainGame';


const Routes = () => {

      return (
        <div id="main-container">
          <Route path="/waiting-room" exact component={WaitingRoom} />
          <Route path="/game" exact component={MainGame} />
          <Route path="/" exact component={Player} />
        </div>
      );
}

export default Routes;
