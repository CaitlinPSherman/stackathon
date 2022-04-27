const router = require('express').Router();
const {
  models: { Image },
} = require('../db');
module.exports = router;

router.get('/:code', async (req, res, next) => {
  try {
    //generate random array of 16 pictureIds using code as seed
    const randomArray = [1, 3, 8, 10, 4];

    const pictures = await Promise.all(
      randomArray.map((num) => {
        return Image.findByPk(num, { attributes: ['url'] });
      })
    );

    console.log('pics here: ', pictures);
    res.send(pictures);
  } catch (err) {
    next(err);
  }
});
