function prom(complete){
    return new Promise(function(resolve, reject){
    if(complete){
        resolve("success");
    }else{
         reject("failed");
        }
    });
}
console.log(prom(true));