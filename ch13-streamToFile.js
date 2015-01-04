var fs = require('fs');
var request = require('request');
var file = fs.createWriteStream('./test.txt');
request.get('http://blog.johnchengweb.com/').pipe(file);