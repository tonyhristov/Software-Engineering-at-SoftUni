const StringBuilder = require('../05.StringBuilder');
let assert = require('chai').assert;
let expect = require('chai').expect;

describe('StringBuilder Test', function() {
   let StBu;
   this.beforeEach(function() {
      StBu = new StringBuilder('');
   });

   it('should have the correct function properties', function() {
      assert.isFunction(StringBuilder.prototype.append);
      assert.isFunction(StringBuilder.prototype.prepend);
      assert.isFunction(StringBuilder.prototype.insertAt);
      assert.isFunction(StringBuilder.prototype.remove);
      assert.isFunction(StringBuilder.prototype.toString);
   });

   it('should initialized without parameters', function() {
      let actual = '';
      let expected = StBu.toString();
      expect(actual.toString()).to.equal(expected);
   });

   it('should initialized with correct parameters', function() {
      let actual = new StringBuilder('test');
      let expected = 'test';
      expect(actual.toString()).to.equal(expected);
   });

   it('throw error - prepend', function() {
      let actual = function() {
         StBu.prepend({ a: 1 });
      };
      let expected = 'Argument must be string';
      assert.throws(actual, expected);
   });

   it('should all methods with correct parameters', function() {
      StBu.append('est');
      StBu.prepend('t');
      StBu.insertAt('Tt', 1);
      StBu.remove(1, 2);
      let actual = 'test';
      let expected = StBu.toString();

      assert.equal(actual, expected);
   });
});
