import React from 'react';
import { Route } from 'react-router-dom';
import Join from './components/Join';
import WaitingRoom from './components/WaitingRoom';
import Pictures from './components/Pictures';


const Routes = () => {

      return (
        <div id="main-container">
          <Route path="/waiting-room" exact component={WaitingRoom} />
          <Route path="/game" exact component={Pictures} />
          <Route path="/" exact component={Join} />
        </div>
      );
}

export default Routes;
