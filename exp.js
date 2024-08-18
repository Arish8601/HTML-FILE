const express = require('express');
const app = express();
const path = require('path');

// Set the 'views' directory and the view engine
app.set('JS', path.join(__dirname, 'JS'));
app.set('view engine', 'ejs');

// Define a simple route
app.get('/', (req, res) => {
    const data = { title: "Home", message: "Welcome to Express with EJS!" };
    res.render('index', data);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

