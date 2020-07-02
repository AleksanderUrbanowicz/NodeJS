//This is commmonJS, import would be ES6, not implemented in node yet
const Person = require('./person'); 
// const Logger = require('./logger');

const person1 = new Person('John Doe',30);
const person2 = new Person('Jane Doe',30);
// person1.greeting();

// const logger = new Logger();

// logger.on('message', (data) => console.log('Called listener:', data ));
// logger.log('msg argument');

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    // console.log(req.url);
    // if(req.url === '/')
    // {
    //     fs.readFile(path.join(__dirname, '/public', 'index.html'),(err, data)=>{
    //         res.writeHead(200,{'Content-Type': 'text/html'});
    //         res.end(data);

    //     })
       
        
    // }
    // if(req.url === '/About')
    // {
    //     fs.readFile(path.join(__dirname, '/public', 'about.html'),(err, data)=>{
    //         res.writeHead(200,{'Content-Type': 'text/html'});
    //         res.end(data);

    //     })
        
    // }
    // if(req.url === '/api/users')
    // {
    //     const users = [person1, person2];

    //         res.writeHead(200,{'Content-Type': 'application/json'});
    //         res.end(JSON.stringify(users));

    // }

    let filePath = path.join(
        __dirname, '/public', req.url === '/' ? 'index.html' : req.url
    );

    let extension = path.extname(filePath);

    let contentType = 'text/html';

    switch(extension){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }
    fs.readFile(filePath, (err, data)=>{
        if(err){
            if(err.code == 'ENOENT')
            {
                fs.readFile(path.join(__dirname, '/public', '404.html'),(err, data)=>{
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(data, 'utf8');
                })
            }
            else{
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
                }}
        else{
            res.writeHead(200, {'Content-Type':contentType});
            res.end(data);
        }
    })
});

const PORT = process.env.PORT || 5002;
server.listen(PORT, ()=> console.log(`Running on port:${PORT}`));