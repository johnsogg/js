// this is a simple intro to JQuery

// This is an assignment operation. Whenver Javascript sees 'a = b', it
// does the RIGHT side of the assignment operator first. Then it takes
// the value on the right side and then places that into the thing
// on the LEFT.
//
// $("ol") means "Give me a list of all the 'ol' elements in the DOM.
//
// var $q means 'make a new local variable called $q'. The dollar sign
// is just a convention that the variable is a JQuery object. You could
// have just called it q, or betty.
var $q = $("ol");

// Now make a local variable called 'shown' that is initially true.
var shown = true;

// Now create a function called whack().
function whack() {
	var $t = $("ol");   // do the same thing as above but name it $t
    if (shown) {        // see if shown is true, and if it is,
        shown = false;  // set shown to false (for next time),
        $t.hide(1300);  // hide all the 'ol' items over 1300 milliseconds
    } else {            // if shown is not true, 
        shown = true;   // set shown to false (for next time)
        $t.show(1300);  // show all the 'ol' items over 1300 milliseconds
    }
}

setInterval(whack, 4000);


console.log("hi");