'use strict';
const http = require('http');
const fs = require('fs');
const htmlFile = fs.readFileSync('./index.html', 'utf-8');
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        //'Const-Type': 'text/plain; charset=utf-8'
        'Const-Type': 'text/html; charset=utf-8'
    });
    //res.write(req.headers['user-agent']);
    res.write(htmlFile);
    res.end();
});
const port = 8000;
server.listen(port, () => {
    console.log('listen on ' + port);
});