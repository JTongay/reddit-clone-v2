'use strict'

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const flash = require('flash');

router.get('/', function (req, res, next) {
  knex('users').innerJoin('posts', 'users.id', 'posts.user_id').then(function(posts) {
    res.render('posts', {posts: posts});
  })
})

module.exports = router;
