'use strict'

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const flash = require('flash');
const Users = function() {
  return knex('users')
};

router.get('/', function(req, res) {
  res.render('users/all')
})

router.get('/:id', function (req, res) {
  let userID = req.params.id;
  Users.where('id', userID).first().then(function (user){
    res.render('users/single', {user: user})
  })
})

module.exports = router
