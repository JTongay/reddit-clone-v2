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
})
