const router = require('express').Router();
const random = require('random');
const seedrandom = require('seedrandom');
module.exports = router;

const games = {};

//games = {
  //1111: {
    //players: [a, b],
    //score: {a: 1, b: 9},
    //gameState: "waiting" or "round 1" etc ?
  //}
//}

//create a new room
// GET /api/game/:code
router.get('/code', async (req, res, next) => {
  //get room code
  try {
    const code = '22'
    //commenting out the randomizer for testing purposes
    // Math.floor(Math.random() * 10000)
    //   .toString()
    //   .padStart(4, '0');

    games[code] = {players: [], score: {}};
    res.send(code);
  } catch (err) {
    next(err);
  }
});

// POST /api/game/:code/player
router.post('/:code/player', async (req, res, next) => {
  //save player info
  try {
    const name = req.body.name;
    if (games[req.params.code].players.includes(name)) {
      res.status(501);
    } else {
      console.log('name going into server here:', name)
      games[req.params.code].players.push(name);
    }
    res.send(name);
  } catch (err) {
    next(err);
  }
});

// // GET /api/game/:code/player
// router.get('/:code/player', async (req, res, next) => {
//   //get all player names by room code
//   try {
//     res.send(games[req.params.code].players);
//   } catch (err) {
//     next(err);
//   }
// });
