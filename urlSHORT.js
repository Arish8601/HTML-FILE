const express = require("express");
const {connectMongoDb} = require("./connection");
const urlRoutes = require("./routes/url");
const app = express();
const PORT = 5000;

app.use("/url", urlRoutes);
connectMongoDb("mongodb://127.0.0.1:27017/URL-shortner")

app.listen(PORT,()=>console.log(`Server Started on Port: ${PORT}`)); 