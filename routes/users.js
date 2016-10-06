'use strict'

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const flash = require('flash');

router.get('/', function(req, res) {
  res.render('users/all')
})


module.exports = router
