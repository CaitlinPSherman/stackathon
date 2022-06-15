import React from 'react';
import { Route } from 'react-router-dom';
import WaitingRoom from './components/WaitingRoom';
import Player from './components/Player';
import MainGame from './components/MainGame';
import LandingPage from './components/LandingPage';


const Routes = () => {

      return (
        <div id="main-container">
          <Route path="/waiting-room" exact component={WaitingRoom} />
          <Route path="/game" exact component={MainGame} />
          <Route path="/player" exact component={Player} />
          <Route path="/" exact component={LandingPage} />
        </div>
      );
}

export default Routes;
