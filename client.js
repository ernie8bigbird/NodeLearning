var http = require('http');

var options = {
    host: 'www.pluralsight.com',
    port: 80,
    path: '/',
    method: 'GET'
};

console.log("Going to make request..."); 

// req = http.request('http://www.google.co.nz/', function(response){
//    console.log(response.statusCode);
//    response.pipe(process.stdout);
//});

var req = http.request(options, function(response){
    console.log(response.statusCode);
    response.pipe(process.stdout);
});
req.end();