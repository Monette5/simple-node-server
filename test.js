'use strict';
const express = require('express');
//const router = express.Router();
const chai = require('chai');  
const expect = require('chai').expect;
chai.use(require('chai-http'));
 
var server = require('../server.js');

describe('Server', function() {  

 
  before(function() {
 //do something before test for pre condition
  });
 
  after(function() {
 //do something after test for post condition
  });
  //I would also add tests to check :id and query routes to check the individual functionality or unit
  describe('GET /user/all', function () {
      it('it should GET all the users', function(done) {
        chai.request(server)
            .get('/user/all')
            .end(function(err, res) {
               expect(res).to.have.status(200);
              done();
           
            });
	  });
  });
 
  // GET - Invalid path
  it('should return Not Found', function() {
    return chai.request(server)
      .get('/INVALID_PATH')
      .then(function(res) {
        throw new Error('Path exists!');
      })
      .catch(function(err) {
        expect(err).to.have.status(404);
      });
  });
 
 });