const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const FILE_PATH = path.join(__dirname, 'notes.md');


const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } else if (req.method === 'GET' && req.url === '/api/load') {
        fs.readFile(FILE_PATH, 'utf8', (err, content) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('');
                } else {
                    res.writeHead(500);
                    res.end('Error reading file');
                }
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(content);
            }
        });
    } else if (req.method === 'POST' && req.url === '/api/save') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            fs.writeFile(FILE_PATH, body, 'utf8', err => {
                if (err) {
                    res.writeHead(500);
                    res.end('Error writing file');
                } else {
                    res.writeHead(200);
                    res.end('Saved');
                }
            });
        });
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

server.listen(PORT, () => {
    console.log(`Editor running at http://localhost:${PORT}/`);
    console.log(`Contents will be saved to ${FILE_PATH}`);
});
