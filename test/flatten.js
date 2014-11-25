var expect = require('chai').expect;

// Write a test for a method called 'flatten' that loops over a nested array
// and returns a new array that is not nested, but contains the same elements
// as the original array.
// Then write the method that will make that test pass.

describe('#flatten()', function() {
	it('loops over nested array and returns unnested array with same elements'), function() {
		var arr = [1,2[3,4]]
		var result = flatten(arr)
    }

    expect(JSON.stringify(result)).to.equal('[1,2,3,4');
});