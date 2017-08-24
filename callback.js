var maxTime = 1000;

// if input is even, double it
// if input is odd, error
// call takes random amount of time < 1s

var evenDoubler = function(v, callback){

}

var handleResults = function(err, results, time) {
    if (err) {
        console.log("ERROR: " + err.message);
    } else {
        console.log("The results are: " + results + " (" + time + " ms)");
    }
};

evenDoubler(2, handleResults);

console.log("-----");