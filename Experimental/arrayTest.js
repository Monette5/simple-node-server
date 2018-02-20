/*First, we use describe to say what we’re testing – for example, “describe how array should work”.
Then, we use a number of it functions to create the individual tests – each it should explain one specific behavior, such as “it should start empty” for our array case above
https://www.sitepoint.com/unit-test-javascript-mocha-chai*/
var chai = require('chai');
describe('Array', function() {
  // Further code for tests goes here
});
describe('Array', function() {
  it('should start empty', function() {
    // Test implementation goes here
  });

  // We can have more its here
});
var assert = chai.assert;

describe('Array', function() {
  it('should start empty', function() {
    var arr = [];

    assert.equal(arr.length, 0);
  });
});