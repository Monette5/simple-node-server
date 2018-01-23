'use strict';


function successResponse(res, result) {
  return res.status(200).json(result);
}


function errorResponse(res, error) {
  return res.status(400).json({
    error: error.message
  });
}


function sendResponse(res, promise) {
  return promise
    .then(successResponse.bind(null, res))
    .catch(errorResponse.bind(null, res));
}


module.exports = {
  sendResponse: sendResponse
};
