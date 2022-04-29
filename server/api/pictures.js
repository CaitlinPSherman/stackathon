const router = require('express').Router();
const random = require('random');
const seedrandom = require('seedrandom')
const {
  models: { Image },
} = require('../db');
module.exports = router;

// GET /api/pictures/:code
router.get('/:code', async (req, res, next) => {
  try {
    //generate random array of 16 pictureIds using code as seed
    const randomSet = new Set();
    random.use(seedrandom(req.params.code))
    while (randomSet.size < 16) {
      randomSet.add(random.uniformInt(1, 20)());
    }
    const randomArray = Array.from(randomSet);

    const pictures = await Promise.all(
      randomArray.map((num) => {
        return Image.findByPk(num, { attributes: ['url', 'id'] });
      })
    );

    res.send(pictures);
  } catch (err) {
    next(err);
  }
});
