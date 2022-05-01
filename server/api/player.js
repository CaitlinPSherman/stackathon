const router = require('express').Router();
module.exports = router;

const players = {};

// GET /api/player/:code
router.get('/:code', async (req, res, next) => {
  //get all player info by room code
  try {

    res.send();
  } catch (err) {
    next(err);
  }
});

// POST /api/player/:code
router.post('/:code', async (req, res, next) => {
  //save player info by room code
  try {
    if (players[req.params.code]) {
      if (players[req.params.code].includes(req.body.name)) {
        res.status(501);
      } else {
        players[req.params.code].push(req.body.name);
      }
    } else {
      players[req.params.code] = [req.body.name];
    }
    console.log('players: ', players);
    res.send(players[req.params.code]);
  } catch (err) {
    next(err);
  }
});
