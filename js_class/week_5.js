/*
 * week_5.js
 *
 * This is all about objects!
 */

/*
 * Vegetable class's constructor that has growing
 * characteristics.
 */
function Vegetable(veggieName) {
  this.name = veggieName;
  this.containerPreference = 'I don\'t know!';
  this.growingDiameter = 1.0;
  this.sunOrientation = "I have no clue";
  this.lovesCold = false;

  this.takeGrowthHormone = function(howMuch) {
  	this.growingDiameter = this.growingDiameter * howMuch;
  	console.log("Yum! Diameter of " + this.name 
  		+ " is now " + this.growingDiameter);
  }
}

// use 'new' to create a new instance of an object
// which is then run through the Vegetable()
// constructor. That's the function right above me.
var tom = new Vegetable("Tomato");
console.log(tom);
console.log("My name is: " + tom.name);
tom.containerPreference = "Pot";
console.log("The container pref is: " + 
	tom.containerPreference);

veggies = [];
veggies.push(tom);
veggies.push(new Vegetable("Potato"));
veggies.push(new Vegetable("Carrot"));
veggies.push(new Vegetable("Swiss Chard"));

for (var i = 0; i < veggies.length; i++) {
  var thisParticularVeggie = veggies[i];
  thisParticularVeggie.sunOrientation = "Sunny";
}

console.log(veggies);
printVeggieNames(veggies);

console.log("Now lets give our Tomato some drugs.");
tom.takeGrowthHormone(4.2);
console.log("More drugs!");
tom.takeGrowthHormone(3);
console.log("MOOOOOAAARRRR!!!!");
tom.takeGrowthHormone(6.9);

// this is wrong:
// console.log(Vegetable());

function printVeggieNames(listOfVeggies) {
	var counter = 1;
	for (var i=0; i < listOfVeggies.length; i++) {
		console.log(counter + ": " + 
			listOfVeggies[i].name);
		counter = counter + 1;
	}
}