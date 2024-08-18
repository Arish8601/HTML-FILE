const fs = require('fs');
// Writing file synchronously

//fs.writeFileSync('WFAsynch.txt', 'this is the content of file');

//Writing file asych.........
fs.writeFile("AyschW.txt", "this is the asych write operation", function(abc){
    if(abc){
    console.log("abc occured", abc);
}
    console.log("abc again occured", abc);
});
console.log("After file write:");





