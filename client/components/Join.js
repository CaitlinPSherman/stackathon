import React, {useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const roomCode = Math.floor(Math.random() * 9999);

const Join = () => {
  return (
   <div id="join-container">
     <label>Room Code:</label>
     <input></input>
     <label>Name:</label>
     <input></input>
     <button>JOIN</button>
   </div>
  )
}

export default Join;
