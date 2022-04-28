const router = require('express').Router();
const {
  models: { Image },
} = require('../db');
module.exports = router;

router.get('/:code', async (req, res, next) => {
  try {
    //generate random array of 16 pictureIds using code as seed
    const randomArray = [];
    let seed = req.params.code;
    for (let i = 0; i < 16; i++) {
      const rand = gen(seed);
      randomArray.push(rand(21));
      seed++;
    }

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
