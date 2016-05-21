var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    var content = '';
    var type = '';
    if(req.url === '/') {
    content = fs.readFileSync('./index.html');
    type = 'text/html';
    } else if(req.url === '/base.css') {
    content = fs.readFileSync('./base.css');
    type = 'text/css';
    }
    res.writeHead(200, {'Content-Type': type});
    res.end(content + '\n');
}).listen(9000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:9000/');
