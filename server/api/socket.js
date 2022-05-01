const router = require('express').Router();
module.exports = router;

// GET /api/socket
router.get('/', async (req, res, next) => {
  try {
    const messages = await Message.findAll();
    res.json(messages);
  } catch (err) {
    next(err);
  }
});

// POST /api/socket
router.post('/', async (req, res, next) => {
  try {
    const message = (req.body);
    res.json(message);
  } catch (err) {
    next(err);
  }
});

// PUT /api/socket
router.put('/:messageId', async (req, res, next) => {
  try {

    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

// DELETE /api/socket
router.delete('/:messageId', async (req, res, next) => {
  try {

    res.status(204).end();
  } catch (err) {
    next(err);
  }
});
