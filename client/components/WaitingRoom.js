import React from 'react';
import { Link } from 'react-router-dom';

const WaitingRoom = () => {

  return (
    <div id="waitingRoom-container">
      <h2>Welcome to Pictures Drawn Poorly!</h2>
      <h3>To get started, go to [url] on your phone and sign in with the room code</h3>
      <h3>Players:</h3>
      <Link to="/game">
        <button type="button">START</button>
      </Link>
    </div>
  );
};

export default WaitingRoom;
