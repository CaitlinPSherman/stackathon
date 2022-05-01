import React from 'react';
import { Route } from 'react-router-dom';
import WaitingRoom from './components/WaitingRoom';
import Pictures from './components/Pictures';
import PlayerJoin from './components/PlayerJoin';
import PlayerWait from './components/PlayerWait';
import PlayerPlaying from './components/PlayerPlaying';


const Routes = () => {

      return (
        <div id="main-container">
          <Route path="/waiting-room" exact component={WaitingRoom} />
          <Route path="/game" exact component={Pictures} />
          <Route path="/" exact component={PlayerJoin} />
          <Route path="/waiting" exact component={PlayerWait} />
          <Route path="/playing" exact component={PlayerPlaying} />
        </div>
      );
}

export default Routes;
