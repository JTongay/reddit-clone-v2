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
