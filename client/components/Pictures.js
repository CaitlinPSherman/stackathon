import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPictures, _getGameCode } from '../store/game';

const Pictures = () => {
  const dispatch = useDispatch();
  const code = useSelector((state) => state.game.code);
  const pictures = useSelector((state) => state.game.pictures);

  useEffect(() => {
    dispatch(getPictures(code));
  }, [code]);

  return (
    <div id="picture-grid">
      {pictures ? (
        pictures.map((pic) => (
          <img className="grid-pic" key={pic.id} src={`${pic.url}`} />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Pictures;
