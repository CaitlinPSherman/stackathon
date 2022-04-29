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

  // We don't have proper users yet (we'll get there soon, though!).
  // Instead, we'll findOrCreate an author by name, for simplicity.
  // Of course, you wouldn't want to do this in a real chat app!
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
    const messageId = req.params.messageId;
    const message = await Message.findByPk(messageId)
    await message.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

// DELETE /api/socket
router.delete('/:messageId', async (req, res, next) => {
  try {
    const id = req.params.messageId;
    await Message.destroy({ where: { id } })
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});
