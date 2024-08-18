const express = require('express');
const app = express();
//Routes
const reqFilter = (req, res, next)=>{
        console.log('reqFilter');
    }
app.use(reqFilter);
app.get('/', (req, res)=>{
    res.send('Welcome to home Page');
});
app.get('/users', (req, res)=>{
    res.send('Welcome to Users Page');
}); 
app.listen(5000);    