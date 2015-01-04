var net = require('net');
var server = net.createServer();
var sockets = [];
server.on('connection', function (socket) {
    console.log('got a new connection.');
    sockets.push(socket);
    socket.on('data', function(data){
        console.log('got data: ', data.toString());
        sockets.forEach(function(otherSocket){
            if (otherSocket !== socket) {
                otherSocket.write(data);
            }
        });
    });
    socket.on('close', function(){
        console.log('connection close');
        var index = sockets.indexof(socket);
        sockets.splice(index, 1);
    })
});
server.on('error', function (err) {
    console.log('Server error: ', err.message);
});
server.on('close', function () {
    console.log('Server closed.');
});
server.listen(4001);