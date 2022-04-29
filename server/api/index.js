const router = require('express').Router();
module.exports = router;


router.use('/pictures', require('./pictures'));
router.use('/game', require('./game'));
router.use('/player', require('./player'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
