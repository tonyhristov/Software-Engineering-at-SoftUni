const isOddOrEven = require('../isOddOrEven');
let assert = require('chai').assert;

describe('isOddOrEven function', function() {
   it('pass number to return undefined', function() {
      let actual = isOddOrEven(2);
      assert.equal(actual, undefined);
   });

   it('pass string to return even', function() {
      let actual = isOddOrEven('even');
      assert.equal(actual, 'even');
   });

   it('pass string to return odd', function() {
      let actual = isOddOrEven('odd');
      assert.equal(actual, 'odd');
   });
});
