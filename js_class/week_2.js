var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var handle_resp = function(answer) {
	console.log("Thank you for your valuable feedback:", answer);
	rl.close();	
}

rl.question("What do you think of node.js? ", handle_resp);

var x = [];
console.log("The type of x is " + typeof(x));

