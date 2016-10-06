'use strict'

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const flash = require('flash');

// function authorizedUser(res, res, next){
//   let userID =
// }

router.get('/', function(req, res, next) {
  res.render('users/all')
})


//This should show users info, posts, and comments
router.get('/:id', function (req, res) {
  let userID = req.params.id;
  knex('users').where('id', userID).first().then(function (user){
    knex('posts').where('user_id', userID).then(function (posts){
      knex('comments').where('user_id', userID).then(function (comments){
        res.render('users/single', {
          user: user,
          posts: posts,
          comments: comments,
        })
      })
    })
  })
})

module.exports = router
