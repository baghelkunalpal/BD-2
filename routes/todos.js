const express = require('express');
const router = express.Router();

//import controller

 const {createTodo} = require("../controllers/createTodo");
const dbConnect = require('../config/database');
 router.post("/api/v1/createTodo", createTodo);
 module.exports = dbConnect;