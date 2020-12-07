//require depencies
const express = require('express');
const mongoose = require('mongoose');
// const ecstatic = require('ecstatic');
// const http = require('http');

//add port here
const PORT = process.env.PORT || 8080;

//initializing express
const app = express();

//express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
 
//connect to mongodb with mongoose



//require in routes html&api


//have app listening
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});