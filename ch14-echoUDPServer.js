var dgram = require('dgram');
var server = dgram.createSocket('udp4'); // there is also udp6
server.on('message', function(message, rinfo){
	console.log(message.toString());
	server.send(message, 0, message.length, rinfo.port, rinfo.address);
});

var port = 4000;
server.on('listening', function(){
	var address = server.address();
	console.log('server listening on ' + address.address + ":" + address.port);
});
server.bind(port);