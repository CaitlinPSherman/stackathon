import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { _getRoomCode } from '../store/game';

const Navbar = () => {
  const dispatch = useDispatch();
  const code = useSelector((state) => state.game.code);
  const stage = useSelector(state => state.game.stage)

  useEffect(() => {
    dispatch(_getRoomCode());
  }, []);

  return (
  <nav>
    <h1>Pictures Drawn Poorly :-/</h1>
    <h1 id="navTimer"></h1>
    {code ? <h1>room code: {`${code}`}</h1> : <h1></h1>}
  </nav>
  )
  }

export default Navbar;
