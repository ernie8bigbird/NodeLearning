var fs = require('fs');
var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (req.url === '/file.txt') {
        fs.createReadStream(__dirname + '/file.txt').pipe(res);    
    } else if (req.url === '/pluralsight.html'){
        fs.createReadStream(__dirname + '/pluralsight.html').pipe(res);
    } else {
        res.end("Hello World");
    }
}).listen(8080);

console.log('Server running!');