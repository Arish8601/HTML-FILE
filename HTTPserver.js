const http = require('http');//This is the called http module or package
const myserver = http.createServer((req, res)=>{
//createServer method accept the callback fun jo incoming request ko accept krta h. and it contain 2 para.
console.log("New Req Re.");
res.end("Hello From Server")
});

myserver.listen(8000, ()=> console.log("Server started!")); 



