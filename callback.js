var maxTime = 1000;

// if input is even, double it
// if input is odd, error
// call takes random amount of time < 1s

var evenDoubler = function(v, callback){
    var waitTime = Math.floor(Math.random() * (maxTime + 1));
    if (v%2) {
        setTimeout(function() {
            callback(new Error("Odd Input"), v, waitTime);
        }, waitTime);
     } else {
        setTimeout(function() {
            callback(null, v*2, waitTime);
        }, waitTime );
    }   
};

var handleResults = function(err, results, time) {
    if (err) {
        console.log("ERROR: " + err.message + " was  "+ results+ " (" + time + " ms)");
    } else {
        console.log("The results are: " + results + " (" + time + " ms)");
    }
};

console.log("2 call");
evenDoubler(2, handleResults);
console.log("3 call");
evenDoubler(3, handleResults);
console.log("10 call");
evenDoubler(10, handleResults);
console.log("-----");