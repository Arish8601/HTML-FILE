//URL module
var address = "http://www.gangulytech.in/courses/show.html?id=12&cat=nodejs";
var url = require('url');
var data = url.parse(address, true);
console.log("HOSTNAME:" + data.host);//This line will det. the host name
console.log("PATHNAME:" + data.pathname);//This line will det. the path name.
console.log("SEARCH:" + data.search);//This line used to search the data.

var a = data.query;
console.log("Data:" +JSON.stringify(a));
console.log("ID:" + a.id);
console.log("Category:" + a.cat);
