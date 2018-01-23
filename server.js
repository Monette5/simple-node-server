'use strict';

const express = require('express');
const { sendResponse } = require('./helpers');


function getAllUsers() {
  return Promise.all(require('./users.json'));
}


function queryUsers(query) {
  return Promise.resolve(require('./users.json'))
    .then(users => users.filter(u => Object.keys(query).reduce((result, key) => {
      const expectedValue = query[key];

      if (u[key] !== expectedValue) {
        return false;
      }

      return true && result;
    }, true)));
}


function getUserById(id) {
  return Promise.resolve(require('./users.json'))
    .then(users => users.find(u => u.id === id))
    .then(result => {
      if (result) {
        return result;
      }

      throw new Error(`Failed to find a user with ID: ${id}.`);
    });
}


function userRouter() {
  const router = express.Router();

  router.get('/all', (req, res) => sendResponse(res, getAllUsers()));
  router.get('/query', (req, res) => sendResponse(res, queryUsers(req.query)));
  router.get('/:id', (req, res) => sendResponse(res, getUserById(req.params.id)));

  return router;
}


function init() {
  const app = express();
  const port = process.env.PORT || 4080;

  app.use('/user', userRouter());

  app.listen(port, () => {
    console.log(`The server is listening on port ${port}.`);
  });
}


try {
  init();
} catch (err) {
  console.error(`Failed to run the server. ${err.message}`);
}
