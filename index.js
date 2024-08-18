const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/irfan");
//...................................................

const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/register', function(req, res){
    
    res.render("register");
});

app.listen(3000, function(){
    console.log("Server is run...");
});
