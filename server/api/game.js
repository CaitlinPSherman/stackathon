const router = require('express').Router();
const random = require('random');
const seedrandom = require('seedrandom');
module.exports = router;

// GET /api/game/:code
router.get('/code', async (req, res, next) => {
  //get room code
  try {
    const code = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, '0');

    res.send(code);
  } catch (err) {
    next(err);
  }
});
