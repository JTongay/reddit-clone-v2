'use strict'
const expect = require( 'chai' ).expect;
const app = require( '../server' );
const request = require( 'supertest' )( app );
const morgan = require( 'morgan' );
const knex = require('../db/knex');

describe('Test the test', function () {
 it('should pass the test', function () {
    expect(true).to.equal(true)
 })
})

describe('Landing Page', function () {
 it('should display the landing page', function (done) {
   request.get('/')
          .expect(200)
          .end(function (err, res) {
            if(err){
              done(err);
            }
            expect(res.text).to.contain("Welcome to the landing page")
            done();
          })
 })
})


describe('Users', function () {
 it('should display all of the users', function (done) {
   request.get('/users')
          .expect(200)
          .end(function(err, res) {
            if(err){
              done(err)
            }
            expect(res.text).to.contain("All the users")
            done();
          })
 })
 it('should display a single user', function (done) {
   request.get('/users/2')
          .expect(200)
          .end(function(err, res) {
            if(err){
              done(err)
            }
            knex('users').where('id', 2).first().then(function(data) {
              expect(res.text).to.contain(data.username)
              done();
            })
          })
 })
 it('should display a single users posts', function (done) {
   request.get('/users/2')
          .expect(200)
          .end(function(err, res) {
            if(err){
              done(err)
            }
            knex('posts').where('user_id', 2).first().then(function(data) {
              expect(res.text).to.contain(data.title)
              done();
            })
          })
 })
 it('should display a single users comments', function (done) {
   request.get('/users/2')
          .expect(200)
          .end(function(err, res) {
            if(err){
              done(err)
            }
            knex('comments').where('user_id', 2).first().then(function(data) {
              expect(res.text).to.contain(data.content)
              done();
            })
          })
 })
})

describe('Posts', function () {
 it('Should display all of the titles of the posts', function (done) {
   request.get('/posts')
          .expect(200)
          .end(function (err, res) {
            if(err){
              done(err);
            }
            knex('users').innerJoin('posts', 'users.id', 'posts.user_id').then(function (posts) {
              expect(res.text).to.contain(posts[0].title);
              expect(res.text).to.contain(posts[1].title);
              expect(res.text).to.contain(posts[2].title);
              done();
            })
          })
 })
 it('Should display the author of all of the posts', function (done) {
   request.get('/posts')
          .expect(200)
          .end(function (err, res) {
            if(err){
              done(err);
            }
            knex('users').innerJoin('posts', 'users.id', 'posts.user_id').then(function (posts) {
              expect(res.text).to.contain(posts[0].username);
              expect(res.text).to.contain(posts[1].username);
              expect(res.text).to.contain(posts[2].username);
              done();
            })
          })
 })
})
