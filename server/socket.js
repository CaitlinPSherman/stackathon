
module.exports = io => {

  io.on('connection', socket => {

    console.log(socket.id, ' has made a persistent connection to the server!');

    socket.emit("hello", "world");

    socket.on('new-player', player => {
      socket.broadcast.emit('new-player', player);
    });

    socket.on('new-channel', channel => {
      socket.broadcast.emit('new-channel', channel);
    });

  });

};
