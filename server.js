'use strict'

// Express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//db
const knex = require('./db/knex');

// Middlewares
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const methodOverride = require('method-override');

// Routes
const users = require('./routes/users');

// Use Middlewares
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieSession({
  secret: "booyah",
}))
app.use(require('flash')());

// Use Routes
app.use('/users', users);


app.listen(port, function () {
  console.log('hello from', port);
});

module.exports = app;
