require('net').createServer(function(socket){
	var rs = require('fs').createReadStream('pipeOutTCP.js');
	rs.pipe(socket);
}).listen(4001);