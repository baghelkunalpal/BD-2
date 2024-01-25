
const express = require('express');
const app = express();

// load config fron env file
require('dotenv').config();
const PORT = process.env.PORT || 3000

//midlleware
app.use(express.json());

const todoRoutes = require('./routes/todos');

// mount the todo apis routes

app.use(todoRoutes);
app.listen(PORT, () =>{
    console.log(`Server stated at ${PORT}`);
})

// connect to the database

const dbConnect = require("./config/database");
dbConnect();

// default routed is also mandatory

app.get("/",(req, res)=>{
    res.send(`<h1> This is the HOMEPAGE of BODY </h1>`);
})