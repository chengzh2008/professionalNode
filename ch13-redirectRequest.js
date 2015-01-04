var request = require('request');
var inspect = require('util').inspect;
request( 'http://localhost:4001/redirect', function(err, res, body) {
	if (err) { throw err; } 
	console.log(err, res, body);
});