var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-concat');

describe('next/concat', function () {

  it('nx concat array', function () {
    var arr1 = [1,2];
    var arr2 = ['a'];
    var result = nx.concat(arr1,arr2);

    assert.equal( result.length , 3);
    assert.deepEqual( [1,2,'a'], result );
  });

});
