var exec = require("child_process").exec;
exec("ls -la", function(err, stdout, stderr){
	if(err) throw new Error();
	console.log(stdout);
})