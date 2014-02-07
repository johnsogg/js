var targetValue = 623;
var high = 10000;
var low = 0;
var guess = 0;
var guessText = "Unknown";

function process_guess() {
	var lastGuess = parseInt($('#guess').val());
	if (lastGuess < targetValue) {
		guessText = "Too Low";
		low = lastGuess;
	} else if (lastGuess > targetValue) {
		guessText = "Too High";
		high = lastGuess;
	} else {
		guessText = "Spot On!";
	}

	$('#high').html(high);
	$('#low').html(low);
	$('#lastGuess').html(lastGuess);
	$('#lastGuessText').html(guessText);
}