const fs = require("fs");
 fs.appendFileSync("./append.txt", new Date().getDate(). toLocaleString());// Or you can also write..see below line.
 fs.appendFileSync("./append.txt", 'Hey there here i am Arish\n');
