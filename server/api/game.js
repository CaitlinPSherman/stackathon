const router = require('express').Router();
module.exports = router;

const games = {};

//games = {
//1111: {
//players: [a, b],
//score: {a: 1, b: 9},
//stage: "beginning", "drawing", "assigning" etc ?
//round: 1, 2, 3, 4, 5
//drawings: {a: ':)', b: ":-/"}
//}
//}

//create a new room
// GET /api/game/:code
router.get('/code', async (req, res, next) => {
  //get room code
  try {
    const code = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, '0');

    games[code] = { players: [], stage: 'beginning', round: 0, pictureAssignments: {}, score: {}, drawings: {} };
    res.send(code);
  } catch (err) {
    next(err);
  }
});

// GET /api/game/:code/assignments
router.get('/:code/assignments', async (req, res, next) => {
  //get pic assignments
  try {
    const picCoords = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4']
    const code = req.params.code
    const players = games[code].players
    const randomCoords = new Set();
    while (randomCoords.size < players.length) {
      randomCoords.add(Math.floor(Math.random() * 17))
    }
    const coordArray = Array.from(randomCoords)
    for (let i = 0; i < players.length; i++) {
      games[code].pictureAssignments[player[i]] = coordArray[i]
    }

    res.send(games[code].pictureAssignments);
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
      games[req.params.code].players.push(name);
    }
    console.log('games: ', games);
    res.send(name);
  } catch (err) {
    next(err);
  }
});

// POST /api/game/:code/stage
router.post('/:code/stage', async (req, res, next) => {
  try {
    games[req.params.code].stage = req.body.stage;
    res.send(games[req.params.code].stage);
    console.log('games: ', games);
  } catch (err) {
    next(err);
  }
});

// POST /api/game/:code/drawing
router.post('/:code/drawing', async (req, res, next) => {
  try {
    const player = req.body.player;
    const drawing = req.body.drawing;
    const code = req.params.code;
    games[code].drawings[player] = drawing;
    res.send({ player, drawing });
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
