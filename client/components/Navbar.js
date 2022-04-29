import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRoomCode } from '../store/game';

const Navbar = () => {
  const dispatch = useDispatch();
  const code = useSelector((state) => state.game.code);

  useEffect(() => {
    dispatch(getRoomCode());
  }, []);

  return (
  <nav>
    <h1>Pictures Drawn Poorly :-/</h1>
    <h1>room code: {`${code}`}</h1>
  </nav>
  )
  }

export default Navbar;
