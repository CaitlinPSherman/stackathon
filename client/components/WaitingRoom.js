import React, {useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const roomCode = Math.floor(Math.random() * 9999);

const WaitingRoom = () => {
  return (
   <div id="waitingRoom-container">
     <h2>Welcome to Pictures Drawn Poorly!</h2>
     <h3>Here's your room code: {`${roomCode}`}</h3>
     <h3>Players:</h3>
     <button>START</button>
   </div>
  )
}

export default WaitingRoom;
