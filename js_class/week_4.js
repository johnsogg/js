var hot = [ "Grapes", "Corn", "Tomatoes", "Peppers",
			"Beans", "Cilantro"];
var cold = [ "Potatoes", "Carrots", "Gooseberries"];
var wet = [ "Grapes", "Corn", "Tomatoes", 
			"Potatoes", "Carrots"];
var dry = [ "Peppers", "Beans", "Cilantro", 
			"Gooseberries"];

// These variables should have been given to us
// by the user. Instead I am just hard-coding them.
var userTemp = "Cold"; // could be "Hot" or "Cold"
var userMoisture = "Wet"; // could be "Dry" or "Wet"

function doesListContain(theList, theValue) {
	ret = false;
	var result = theList.indexOf(theValue);
	if (result >= 0) {
		ret = true;
	}
	return ret;
}

// console.log("Does the hot list contain tomatoes?");
// console.log(doesListContain(hot, "tomatoes"));

function getResponse(userTemp, userMoisture) {
	var ret = [];
	var temperatureList;
	var moistureList;
	// first initialize temperatureList to hot or cold.
	if (userTemp == "Hot") {
		temperatureList = hot;
	} else {
		temperatureList = cold;
	}

	// now get moistureList as wet or dry.
	if (userMoisture == "Wet") {
		moistureList = wet;
	} else {
		moistureList = dry;
	}

	console.log("The temp list is: " + temperatureList);
	console.log("The moisture list is: " + moistureList);

	for (var i = 0; i < temperatureList.length; i++) {
		var what = temperatureList[i];
		console.log("Now inspecting: " + what);
		var isItThere = doesListContain(moistureList, what);
		console.log("Is it in the moisture list? " + isItThere);
		if (isItThere) {
			ret.push(what);
		}		
	}
	console.log("Now returning the list: " + ret);
	return ret;
}

getResponse(userTemp, userMoisture);
