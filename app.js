const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const method = req.method;
    const url =  req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text"/><button type="submit">Send Us</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>The First Page</title></head>');
    res.write('<body><h1>Hello from my NodeJS server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);


