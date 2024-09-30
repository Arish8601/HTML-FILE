const fs = require('fs');
let data = fs.readFileSync('./conmht.js', 'utf-8'); //Read file synch........
console.log(data);

//fs.readFile("cont.txt", "utf-8",function(err, result){ //Read file Asynch.......
   // if(err){
        //console.log("error", err);        
   // }                                  
   // else{
     //   console.log(result);                    
   // }                              
//});                                                                                  



