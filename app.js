var server = require('http').createServer();
var io = require('socket.io')(server);

io.sockets.on('connection', function (socket) {
    console.log('socket connected');

    socket.on('disconnect', function () {
        console.log('socket disconnected');
    });

    socket.emit('chat', 'This is a test of socket.io!');
});

server.listen(3000);
console.log('listening on port 3000');