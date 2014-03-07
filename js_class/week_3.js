/*
	Week 3
*/

// for-loops
var foo = [6, 8, 3, 4, 2, -4, 7];
//   initializer; truth test;     increment
for (i = foo.length / 2;       i < foo.length; i++) {
	var sq = foo[i] * foo[i];
	console.log(sq);
}

// do/while
console.log("\ndo/while");
var x = 2;
do {
	x = x * 3;
	console.log(x);
} while (x < 10);

// functions
console.log("\nfunctions");

function heading(what) {
	console.log("\n ====== " + what + " \n");
}

heading("There be whales here!");

function poly(x) {
	return 3 + (2 * x * x);
}

for (i=4; i < 9; i++) {
	var retval = poly(i);
	console.log("Input:  " + i);
	console.log("Output: " + retval);
}

heading ("Now on to data types...");

// data types
yes = true;
console.log(typeof(yes));
gabename = "Gabe";
console.log(typeof(gabename));
x = 47.2;
console.log(typeof(x));
console.log(typeof(heading));
console.log(100/0);
console.log(0/0);

// data structures

heading ("Data Structures, the simple kind");
// Arrays = Lists
// square brackets with comma-separated things
empty_list = [ ];
evens = [ 2, 4, 6, 8, 10 ];
various_stuff = [ "hi", true, heading, 100/0, 47.2 ];
// index lists like this:
console.log(evens[3]);

// Associative arrays, maps, dictionaries, hashes.
person = { 
	// key: value,
	first_name: "Gabe",
	bald: true,
	last_name: "Johnson",
	age: 37,
	ssn: 92834732,
};
console.log("This person's first name is...");
console.log(person.first_name);

bag = {
	"contents" : [ "laptop", "sunglasses"],
	"color" : "red",
};

console.log("You can index this using the literal key");
console.log(bag["color"]);
// objects

heading("Objects! Last thing!");

function dog(name) {
	this.appearance = "Brown";
	this.age = 1;
	this.name = name;
	this.bark = function() {
		console.log("Woof! Bark! Ahooooo!");
	};
}
fluffy = new dog("Fluffykins");
spud = new dog("Sputnik");
console.log("The name of this last one is...");
console.log(spud.name);
spud.bark();


