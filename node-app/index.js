const http = require('http');
const server = http.createServer((req,res)=>{
res.writeHead(200, {'Content-Type':'text/plain'});
res.end("NodeJS App Running!");
});
server.listen(3000);
