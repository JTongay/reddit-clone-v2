'use strict'

// Express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//db
const knex = require('./db/knex');

// Middlewares
const bodyParser = require('body-parser');
const router = express.Router();
const cookieSession = require('cookie-session');
const methodOverride = require('method-override');

// Routes
// const auth = require('./routes/auth');

// Use Middlewares
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieSession({
  secret: "booyah",
}))



module.exports = app;
