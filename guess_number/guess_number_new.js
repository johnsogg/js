var secretNumber = 649; // will eventually be random
var boundHigh = 1000; // resets to 1000
var boundLow = 0; // resets to 0

function guessNumber() {
	console.log("Hello!");
	// parseInt: a function that takes a string and returns an integer
	// $('stuff'): JQuery command to access the thing with id='stuff' 
	// .val(): Gives you the string the user typed in
	// whole line turns text input into a number, stored in userGuess.
	var userGuess = parseInt($('#guess').val());
	if (isNaN(userGuess)) {
		console.log("I can't do anything with that, dude!");
	} else {
		console.log("You gave a proper number: " + userGuess);
		processNumber(userGuess);
	}
}

function processNumber(userGuess) {
	if (userGuess > secretNumber) {
		// Too high
		console.log("Too high...");
		boundHigh = userGuess;
		$('#congrats').html("");
	} else if (userGuess < secretNumber) {
		// Too low
		console.log("Too low...");
		boundLow = userGuess;
		$('#congrats').html("");
	} else {
		// Correct!
		console.log("Congrats, the secret number was " + secretNumber);
		$('#congrats').html("Congrats, that's the right number. Resetting!");
		resetGame();
	}
	// change the 'low' span so it now shows boundLow. Uses dot notation.
	$('#low').html(boundLow);

	// do the same with the 'high' span. On two lines to show another
	// way of doing it. Uses a variable instead of dot notation.
	var upperBoundSpan = $('#high');
	upperBoundSpan.html(boundHigh);
}

function resetGame() {
	boundLow = 0;
	boundHigh = 1000;
	secretNumber = Math.floor(Math.random() * 1000) + 1;
	$('#low').html(boundLow);
	$('#high').html(boundHigh);
}