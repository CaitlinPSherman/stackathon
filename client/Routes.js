import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Join from './components/Join';
import WaitingRoom from './components/WaitingRoom';
import { me } from './store';


const Routes = () => {

      return (
        <div id="main-container">
          <Route path="/game" exact component={WaitingRoom} />
          <Route path="/" exact component={Join} />
        </div>
      );
}

export default Routes;
