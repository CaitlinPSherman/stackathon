module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(socket.id, ' has made a persistent connection to the server!');

    socket.on('new-player', (player) => {
      socket.broadcast.emit('new-player', player);
    });

    socket.on('change-stage', (stage) => {
      socket.broadcast.emit('change-stage', stage);
    });

    socket.on('submit-drawing', (playerDrawing) => {
      socket.broadcast.emit('submit-drawing', playerDrawing);
    });

  });
};
