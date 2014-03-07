/*
	week_3.js

	For-loops, do-while loops, data types, functions, data structures.
*/

for (i = 0; i < 6; i++) {
	console.log("At top of loop.");
	console.log("Current value of i is: " + i);
	console.log("At end of loop.");
}

var count = 0;
console.log("\nOK, outside of the for-loop.\n");
do {
	console.log("Inside the do/while block. Count is: " + count)
	count = count + 1;
} while (count < 6);

console.log("\nOK, outside the do/while loop.");

var gabe_bald = true;
var april_bald = false;

console.log("Is gabe bald?");
if (gabe_bald) {
	console.log("Yep, gabe is bald.");
} else {
	console.log("Nope, gabe is not bald.");
}

console.log("Is april bald?");
if (april_bald) {
	console.log("Yep, april is bald.");
} else {
	console.log("Nope, april is not bald.");
}

console.log("\nNow lets try it with a function call instead...\n");

function is_bald(person_name, baldness) {
	console.log("Is " + person_name + " bald?");
	if (baldness) {
		console.log("Yep, " + person_name + " is bald.");
	} else {
		console.log("Nope, " + person_name + " is not bald.");
	}	
}
is_bald("Gabe", gabe_bald);
is_bald("April", april_bald);

console.log("\nNow lets define a map with some scalar values and a function.\n");

var gabe = {
	is_bald: false,
	name: "Gabe",
	report_bald: function () {
		console.log("Is " + this.name + " bald?");
		if (is_bald) {
			console.log("Yep, " + this.name + " is bald.");
		} else {
			console.log("Nope, " + this.name + " is not bald.");
		}	
	}
}

gabe.report_bald();

console.log("\nWe can define an 'object' by using a function in conjunction " +
	"with the 'new' operator.\n");

function dog(yearsOld, whatKindOfPerro, weight) {
	this.age = yearsOld;
	this.breed = whatKindOfPerro;;
	this.weight = weight;
	this.report = function() {
		console.log("This dog is " + this.age + " years old and weighs " + this.weight + " pounds");
	};
}

var sputnik = new dog(4.5, "Mixed", 45);
console.log("Sputnik's breed: " + sputnik.breed + ".");
// now note that we invoke a method on the sputnik object. In the 'report' function, the
// keyword 'this' will refer to the instance on hand.
sputnik.report();

console.log("Lets make another dog who is older and bigger than sputnik and report it out.");
var minnie = new dog(9, "St. Bernard", 130);
minnie.report();

console.log("\nNow we will play with some lists. Start with the first few even numbers.\n");

var evens = [2, 4, 6, 8, 10];
for (i = 0; i < evens.length; i++) {
	console.log("at index " + i + ", the even number is: " + evens[i]);
}