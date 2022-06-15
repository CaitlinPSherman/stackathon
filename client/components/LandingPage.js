import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  console.log('landing page')
  return (
    <>
      <Link to="/player">
      <button>Player</button>
      </Link>
      <Link to="/waiting-room">
      <button>Main Screen</button>
      </Link>
    </>
  );
};

export default LandingPage;
