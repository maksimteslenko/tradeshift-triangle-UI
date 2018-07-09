'use strict';

//Dependencies
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

//Set the view engine to ejs
app.set('view engine', 'ejs');

app.listen(3060);
console.log('Go to: http://localhost:3060/ in your browser');

//Node.js body parsing middleware
app.use(bodyParser.urlencoded({
	extended: true
}));

//Routes
const indexRoute = require('./routes/index');
app.use('/', indexRoute);