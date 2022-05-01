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
    <div id="pictures-container">
      <div id="pics-x-label">
        <h2>A</h2>
        <h2>B</h2>
        <h2>C</h2>
        <h2>D</h2>
      </div>
      <div id="pics-fit">
        <div id="pics-y-label">
          <h2>1</h2>
          <h2>2</h2>
          <h2>3</h2>
          <h2>4</h2>
        </div>
        <div id="pics-grid">
          {pictures ? (
            pictures.map((pic) => (
              <img className="grid-pic" key={pic.id} src={`${pic.url}`} />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pictures;
